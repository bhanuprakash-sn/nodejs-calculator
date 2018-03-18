import React from 'react';
import update from 'react-addons-update';
import ClientFetch from './utils/ClientFetch';

class Calculator extends React.Component {
	constructor(props)
	{
		super(props);
		this.state = {
		      input: {
		        valueA: "",
		       	valueB: "",
		       	operation: "",
		       	result: ""
		      }
		    };
		this.handleInputChange = this.handleInputChange.bind(this);
    	this.onSumbit = this.onSumbit.bind(this);

	}

	handleInputChange(event)
	{
		var newState = {input:{}};
		newState.input[event.target.name] = {$set: event.target.value};

		this.setState(update(this.state, newState));
	}

	getAPIPath()
	{
		var apiPath = "";
		switch(this.state.input.operation)
		{
			case "ADD":
				apiPath = "api_get_add_result";
				break;
			case "SUB":
				apiPath = "api_get_sub_result";
				break;
			case "MUL":
				apiPath = "api_get_mul_result";
				break;
			case "DIV":
				apiPath = "api_get_div_result";
				break;
			default:
				apiPath = "";
		}
		return apiPath;
	}

	onSumbit(e)
	{
		e.preventDefault();
		console.log(this.props);
		
		// fill all hidden values
		var params = {
			valueA: this.state.input.valueA,
			valueB: this.state.input.valueB
		};
		
		var clientFetch = new ClientFetch();
		var apiPath = this.getAPIPath();
		clientFetch.fetch(apiPath + '?a=' + this.state.input.valueA + '&b=' + this.state.input.valueB, {method: "GET"})
			.then(result => {
		        
		        return true;
      		})
      		.catch(error => {
      			console.log(error);
      			throw error;
      		});
	}


	render()
	{
		return(
			<form id="calcForm">
				<span>Please input the first number:</span><input type="number" name="valueA" onChange={this.handleInputChange} required="required"/><br/>
				<span>Please input the second number:</span><input type="number" name="valueB" onChange={this.handleInputChange} required="required"/><br/>
				
				
		        <button onClick={this.onSumbit}>Calculate</button>
			</form>
		)
	}
}

export default Calculator;
