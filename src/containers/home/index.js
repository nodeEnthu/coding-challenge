
import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Question from './../../components/Question'
import {increment} from '../../modules/counter'


class Home extends React.Component{
  render(){
    let {questionsList} = this.props.questions.toJS();
    return(
      <div className="container">
        <div className="col-sm-12">
          <hr/>
          <h3 className="title">Coding challenge</h3>
          <hr/>
        {
          questionsList.map((question,index) =>{
            return <Question key={'questionId'+index} question={question} selectAnswer={this.props.increment} />
          })
        }
          <div className="result alert alert-info"></div>
          {/*<p><button onClick={() => this.props.changePage()}> Results page</button></p>*/}
        </div>
      </div>
    )
  }
  
}

const mapStateToProps = state => ({
  questions: state.counter.get("questions") 
})

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  changePage: () => push('/about-us')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)