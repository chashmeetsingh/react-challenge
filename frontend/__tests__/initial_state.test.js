import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import PrimeInput from "../src/views/components/input";
import {Provider} from "react-redux";
import store from "../src/store";
import reducer from "../src/store/reducers/prime";
import * as types from "../src/constants/action";
const CronJob = require("cron").CronJob;
import * as actions from '../src/store/actions/getMedian'

jest.useFakeTimers();

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);

  const component = () => {
    return (
      <Provider store={store}>
        <PrimeInput />
      </Provider>
    )
  }
  act(() => {
    render(component(), container);
  });
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders component without result", () => {
  expect(container.textContent).toBe("Get Median");

  const button = document.querySelector("#submit");
  expect(button.innerHTML).toBe("Get Median");

  const input = document.querySelector("#max-number");
  expect(input.value).toBe("");
});

it("shows spinner when button clicked", () => {
  const button = document.querySelector("#submit");
  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  const spinner = document.querySelector("#spinner");
  expect(spinner).not.toBeNull();

  const getMedian = jest.fn();

  jest.useFakeTimers("modern");
  const job = new CronJob({
    cronTime: "* * * * *",
    onTick: function () {
      getMedian()
    },
    start: true,
  });
  jest.advanceTimersByTime(60 * 1000);

  job.stop();
  expect(getMedian).toBeCalledTimes(1);
});

it("show result when successful response", () => {
  // for success response
  store.dispatch({
    type: types.PRIME.GET_PRIMES_SUCCESS,
    response: {
      data: 41
    }
  })

  const success_result = document.querySelector("#result");
  expect(success_result).not.toBeNull();
  expect(success_result.innerHTML).toEqual("Median is: 41");
})

it("show result when successful response", () => {
  // for error response
  store.dispatch({
    type: types.PRIME.GET_PRIMES_ERROR,
    error: "Please enter a number greater than 2"
  })

  const error_result = document.querySelector("#result");
  expect(error_result).not.toBeNull();
  expect(error_result.innerHTML).toEqual("Please enter a number greater than 2");
})
