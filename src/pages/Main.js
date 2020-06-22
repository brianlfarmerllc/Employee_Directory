import React, { Component } from 'react';
import Header from '../components/Header';
import Input from '../components/Input';
import Table from '../components/Table';
import API from "../api/Api"


class Main extends Component {
    state = {
        result: [],
        search: "",
        sort: "",
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
    
    handleSort = event => {
        event.preventDefault();
        if (this.state.sort === "") {
            const currentResult = this.state.result
            let sortedResult = currentResult.sort((a, b) => { 
                return a.name.first.localeCompare(b.name.first, undefined, { caseFirst: "upper" })
            });
            this.setState({ result: sortedResult })
            this.setState({sort:"az"})
        } else if (this.state.sort === "az"){
            const currentResult = this.state.result
            let sortedResult = currentResult.sort((a, b) => { 
                return b.name.first.localeCompare(a.name.first, undefined, { caseFirst: "upper" })
            });
            this.setState({ result: sortedResult })
            this.setState({sort:""})
        }
    }

    render() {

        return (
            <>
                <Header />
                <Input
                search={this.state.search}
                handleChange={this.handleChange}
                />
                <Table
                sortName={this.handleSort}
                results={this.state.result} 
                search={this.state.search}
                />
            </>);
    }

}

export default Main;

