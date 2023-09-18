import { Component } from "react";
import './App.css'
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        {id: 1, charge: '렌트비', amount: '2000'},
        {id: 2, charge: '교통비', amount: '400'},
        {id: 3, charge: '식비', amount: '1200'}
      ]
    }
  }

  removeItem = (id) => {
    const newItemList = this.state.items.filter((item) => item.id !== id)
    this.setState({items: newItemList})
  }

  render() {
    return(
      <main className="main-container">
        <h1>예산 계산기</h1>
        <div style={{width: '100%', backgroundColor: 'white', padding: '1rem'}}>
          <ExpenseForm />
        </div>
        <div style={{width: '100%', backgroundColor: 'white', padding: '1rem'}}>
          <ExpenseList itemList={this.state.items} removeItem={this.removeItem}/>
        </div>

        <div style={{display: 'flex', justifyContent:'end', marginTop: '1rem'}}>
          <p style={{ fontSize: '2rem'}}>
            총지출:
            <span>
              원
            </span>
          </p>
        </div>
      </main>
    )
  }
 }

 export default App;