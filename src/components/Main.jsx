import React from 'react';

import { connect } from 'react-redux';

import './Main.less';
import Loader from './Loader/index';
import ErrorMessage from './ErrorMessage/index';
import Content from './Content/index';
import {getRecordsData} from "../redux/actions/records-async-actions";

import {
  PageHeader
} from "react-bootstrap";

class Main extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
      this.props.getData();
  }

  render() {
    const { data } = this.props;
    return (
      <div className="phone-book">
        <PageHeader>Phone Book</PageHeader>
        <Content data={data}/>
        {this.props.errorMessage !== '' && <ErrorMessage errorMessage={this.props.errorMessage}/>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.records.isLoading,
    errorMessage: state.records.errorMessage,
    data: state.records.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch(getRecordsData())
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Main);
