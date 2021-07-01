import React from 'react';
import { connect } from 'react-redux';
import Category from './Category';
import { createGetDataThunk } from '../../store/reducers/reducerGetDate';

class Categoryes extends React.Component {

    componentDidMount() {
        this.props.createGetDataThunk()
    }

    render() {

        return (
            <div className="categoryes">
                {
                    this.props.data.isFetching && <div className="fetching"><div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>
                }
                {
                    this.props.data.categoryes.map((item, i) => <Category key={i} isDeliveri={this.props.data.isDeliveri} products={this.props.data.products} data={item} />)
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.data
    }
}




const CategoryesContainer = connect(mapStateToProps, {createGetDataThunk})(Categoryes)

export default CategoryesContainer