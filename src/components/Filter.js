import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div>
                <strong>Filter by Category</strong> {""}
                <select value={this.props.category} onChange={(e) => this.props.setCategory(e.target.value)} className="quantity-select">
                    <option value="All">ALL</option>
                    <option value="Chain">Chain</option>
                    <option value="Wheels">Wheels</option>
                    <option value="Tires">Tires</option>
                    <option value="Exhaust">Exhaust</option>
                </select>
              
            </div>
        )
    }
}
