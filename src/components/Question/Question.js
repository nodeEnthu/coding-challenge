import React from 'react'
import PropTypes from 'prop-types'
import './question.css'
class Question extends React.Component{
	render(){
		const {question} =  this.props
		return(
				<form action="">
					<div className="form-group">
						<h4>{question.text}</h4>
						<hr/>
						{
							question.answers.map((answer,index) => {
								return <div key={'answer'+question.id+answer.id} className="form-radio">
											<input type="radio" className="form-radio-input " id="n1" name="name" value="Anthony"/>
											<label className="form-radio-label">{answer.text}</label>
										</div>
							})
						}
					</div>
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>	
		)
	}
}

Question.propTypes={
	
}

export default Question