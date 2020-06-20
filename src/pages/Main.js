import React, { Component } from 'react';
import Header from '../components/Header';
import Input from '../components/Input';
import Table from '../components/Table';
import API from "../api/Api"


class Main extends Component {
    state = {
        result: [],
        search: ""
    };

    componentDidMount() {
        this.searchEmployees();
    }

    searchEmployees = () => {
        API.getEmployees()
            .then(res => this.setState({ result: res.results }))
            .catch(err => console.log(err));
    };

    handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
    }
    
    // handleSubmit = event => {
    //     event.preventDefault();
    //     const employees = this.state.result
    //     const search = this.state.search
    //     console.log(employees)
    //     console.log(search)
    //     const filtered = employees.filter(employee => employee.name === search)
    //     console.log(filtered)
    // }

    render() {

        return (
            <>
                <Header />
                <Input
                search={this.state.search}
                // handleSubmit={this.handleSubmit} 
                handleChange={this.handleChange}
                />
                <Table 
                results={this.state.result} 
                search={this.state.search}
                />
            </>);
    }

}

export default Main;

