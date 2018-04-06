import React from 'react'
import PropTypes from 'prop-types'
import './question.css'
class Question extends React.Component{
	constructor(props){
		super(props);
		this.state={
			answerId:undefined,
			showOtherResponses:false
		};
		this.onAnswerSubmit =  this.onAnswerSubmit.bind(this);
	}
	checkAnswer(questionId, answerId){
		this.setState({
			questionId:questionId,
			answerId: answerId
		})
	}
	onAnswerSubmit(e){
		let self = this;
		e.preventDefault();
		const {questionId , answerId} = this.state;
		this.props.selectAnswer(questionId, answerId);
		this.setState({showOtherResponses:true});
		//setTimeout(() => self.setState({showOtherResponses:false}) , 5000)
	}
	render(){
		const {question} =  this.props
		let answerId = (this.state.answerId)?  parseInt(this.state.answerId) -1 : undefined;
		let {showOtherResponses} = this.state;
		return(	<div className="question-wrapper">
					{(showOtherResponses)?
						<div>
							<div className="alert alert-success" role="alert">
						  		<button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						  		<strong>Yello there</strong> you chose <span>{question.answers[answerId].text}</span>
							</div>
							{
								question.answers.map(function(answer,index){
									if(index !== answerId){
										return (
											<div key={'othersChose'+index }className="alert alert-info" role="alert">
										  		<button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
										  		<strong>{question.answers[index].responses}</strong> others chose <span>{question.answers[index].text}</span>
											</div>
										)
									}
								})
							}
						</div>
						:
						undefined
					}
					<form>
						<div className="form-group">
							<h4>{question.text}</h4>
							<hr/>
							{
								question.answers.map((answer,index) => {
									return <div key={'answer'+question.id+answer.id} className="form-radio">
												<input onClick= {() => this.checkAnswer(question.id, answer.id)}type="radio" className="form-radio-input " id="n1" name="name" value="Anthony"/>
												<label className="form-radio-label">{answer.text}</label>
											</div>
								})
							}
						</div>
						<button disabled={(answerId || answerId === 0)? false:true} className="btn btn-primary" onClick={this.onAnswerSubmit}>Submit</button>
					</form>
				</div>	
		)
	}
}

Question.propTypes={
	selectAnswer: PropTypes.func.isRequired
}

export default Question