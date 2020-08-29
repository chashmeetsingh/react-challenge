import React from 'react';
import {Alert, Button, Container, FormControl, InputGroup, Spinner} from "react-bootstrap";
import {getMedian} from "../../store/actions/getMedian";
import {connect} from "react-redux";

class PrimeInput extends React.Component {

  state = {
    value: "",
  }

  handleChange(event) {
    let value = event.target.value;

    this.setState({
      value: value,
    })
  }

  getMedian() {
    this.setState({loading: true})
    this.props.actions.getMedian(this.state.value)

    this.setState({
      value: ''
    });
  }

  render() {

    const renderResult = () => {
      let variant = this.props.error ? 'danger' : 'success';

      if (this.props.error || this.props.median)
        return (
          <Alert variant={variant}>
            {
              this.props.error
                ? this.props.error.toString()
                : 'Median is: ' + this.props.median
            }
          </Alert>
        )
    }

    const renderLoading = () => {
      if (this.props.loading)
        return (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )
    }

    return (
      <Container>
        <InputGroup className="mb-3">
          <FormControl
            id={"max-number"}
            placeholder="Max limit for prime numbers"
            aria-label="Max limit for prime numbers"
            aria-describedby="basic-addon2"
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
          />
        </InputGroup>
        <InputGroup.Append>
          <div className="mb-2">
            <Button variant="dark" size="lg" onClick={() => this.getMedian(100)}>
              Get Median
            </Button>
          </div>
        </InputGroup.Append>
        {
          renderResult()
        }
        {
          renderLoading()
        }
      </Container>
    )
  }

}

const mapStateToProps = function(state) {
  const median = state && state.prime.median;
  const error = state && state.prime.error;
  const loading = state && state.prime.loading;

  return {
    median,
    error,
    loading,
  };
};

const mapDispatchToProps = function(dispatch) {
  const dispatchActions = {
    getMedian: function(maxNumber) {
      dispatch(getMedian(maxNumber));
    },
  };

  return {
    actions: dispatchActions,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PrimeInput);
