import React from 'react';

import './content.less';
import {
    Grid,
    Table,
    Glyphicon
} from "react-bootstrap";

class Content extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sort: {
                name: 'firstName',
                direction: 'ASC'
            }
        }
    }

    switchFilter = (filter) => {
        if (filter === this.state.sort.name) {
            this.setState({
                sort: {
                    ...this.state.sort,
                    direction: this.state.sort.direction === 'ASC' ? 'DESC' : 'ASC'
                }
            })
        } else {
            this.setState({
                sort: {
                    ...this.state.sort,
                    name: filter
                }
            })
        }
    }

    render () {
        const { sort } = this.state;
        const mappedContent = this.props.data.sort((a, b) => {
            switch (sort.name) {
                case 'firstName':
                case 'lastName':
                case 'phoneNumber':
                    if(a[sort.name] > b[sort.name]) {
                        if (sort.direction === 'ASC') {
                            return 1;
                        } else {
                            return -1;
                        }
                    }
                    if(a[sort.name] < b[sort.name]) {
                        if (sort.direction === 'ASC') {
                            return -1;
                        } else {
                            return 1;
                        }
                    }
                    return 0;
                case 'birthday':
                    return sort.direction==='ASC' ? a[sort.name] - b[sort.name] : b[sort.name] - a[sort.name];
            }
        }).map((item, index) => {
            return (
                <tr key={index}>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{formatDate(item.birthday)}</td>
                    <td>{item.phoneNumber}</td>
                </tr>
            )
        })
        return (
            <Grid>
                <div className="content ">
                    <Table striped bordered condensed hover responsive={true}>
                        <thead>
                            <tr>
                                <th onClick={() => this.switchFilter('firstName')}>
                                    <span className="text">First Name</span>
                                    <span className={sort.name==='firstName' ? 'selected' : ''}>
                                        {
                                            (sort.name==='firstName' && sort.direction==='ASC') ?
                                                <Glyphicon glyph="chevron-up" /> :
                                                <Glyphicon glyph="chevron-down" />
                                        }
                                    </span>
                                </th>
                                <th onClick={() => this.switchFilter('lastName')}>
                                    <span className="text">
                                        Last Name
                                    </span>
                                    <span className={sort.name==='lastName' ? 'selected' : ''}>
                                        {
                                            (sort.name==='lastName' && sort.direction==='ASC') ?
                                                <Glyphicon glyph="chevron-up" /> :
                                                <Glyphicon glyph="chevron-down" />
                                        }
                                    </span>
                                </th>
                                <th onClick={() => this.switchFilter('birthday')}>
                                    <span className="text">
                                        Birthday
                                    </span>
                                    <span className={sort.name==='birthday' ? 'selected' : ''}>
                                        {
                                            (sort.name==='birthday' && sort.direction==='ASC') ?
                                                <Glyphicon glyph="chevron-up" /> :
                                                <Glyphicon glyph="chevron-down" />
                                        }
                                    </span>
                                </th>
                                <th onClick={() => this.switchFilter('phoneNumber')}>
                                    <span className="text">
                                        Phone Number
                                    </span>
                                    <span className={sort.name==='phoneNumber' ? 'selected' : ''}>
                                        {
                                            (sort.name==='phoneNumber' && sort.direction==='ASC') ?
                                                <Glyphicon glyph="chevron-up" /> :
                                                <Glyphicon glyph="chevron-down" />
                                        }
                                    </span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        {mappedContent}
                        </tbody>
                    </Table>
                </div>
            </Grid>
        )
    }

}

const formatDate = (data) => {
  const date = new Date(data);
  let dd = date.getDate();
  let mm = date.getMonth()+1;
  const yyyy = date.getFullYear();

  if( dd<10 ) {
    dd = '0' + dd;
  }
  if( mm<10 ) {
    mm = '0' + mm;
  }

  const result = dd + '/' + mm + '/' + yyyy;
  return result;
}

export default Content;