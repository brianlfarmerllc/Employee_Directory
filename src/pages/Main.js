import React, { Component } from 'react';
import Header from '../components/Header';
import Input from '../components/Input';
import Table from '../components/Table';
import API from "../api/Api"


class Main extends Component {
    state = {
        result: [],
        search: "",
        sortName: "",
        sortLocation: "",
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
    
    handleSortName = event => {
        event.preventDefault();
        if (this.state.sortName === "") {
            const currentResult = this.state.result
            let sortedResult = currentResult.sort((a, z) => { 
                return a.name.first.localeCompare(z.name.first, undefined, { caseFirst: "upper" })
            });
            this.setState({ result: sortedResult })
            this.setState({sortName:"az"})
        } else if (this.state.sortName === "az"){
            const currentResult = this.state.result
            let sortedResult = currentResult.sort((a, z) => { 
                return z.name.first.localeCompare(a.name.first, undefined, { caseFirst: "upper" })
            });
            this.setState({ result: sortedResult })
            this.setState({sortName:""})
        }
    }

    handleSortLocation = event => {
        event.preventDefault();
        if (this.state.sortLocation === "") {
            const currentResult = this.state.result
            let sortedResult = currentResult.sort((a, z) => { 
                return a.location.state.localeCompare(z.location.state, undefined, { caseFirst: "upper" })
            });
            this.setState({ result: sortedResult })
            this.setState({sortLocation:"az"})
        } else if (this.state.sortLocation === "az"){
            const currentResult = this.state.result
            let sortedResult = currentResult.sort((a, z) => { 
                return z.location.state.localeCompare(a.location.state, undefined, { caseFirst: "upper" })
            });
            this.setState({ result: sortedResult })
            this.setState({sortLocation:""})
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
                sortName={this.handleSortName}
                sortLocation={this.handleSortLocation}
                results={this.state.result} 
                search={this.state.search}
                />
            </>);
    }

}

export default Main;

