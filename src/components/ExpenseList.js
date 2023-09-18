import React, { Component } from 'react'
import ExpenseItem from './ExpenseItem'
import { MdDelete } from 'react-icons/md'

export class ExpenseList extends Component {
  render() {
    return (
      <>
        <ul className='list'>
          { this.props.itemList.map(item => {
            return (
              <ExpenseItem item={item} key={item.id} removeItem={this.props.removeItem}/>
            )
          }) }
        </ul>
        <button className='btn'>
          목록 지우기 <MdDelete className='btn-icon'/>
        </button>
      </>
    )
  }
}

export default ExpenseList