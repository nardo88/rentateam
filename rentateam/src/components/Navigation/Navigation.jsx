import React from 'react';
import { connect } from 'react-redux';
import NavigationItem from './NavigationItem';

const Navigation = ({ data }) => {
    return (
        <div className="navigation">
            <div className="container">
                <div className="navigation__wrapper">
                    <ul className="navigation__list">
                        {
                            data.categoryes.map(item => <NavigationItem key={item.id} item={item}/>)
                        }
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        data: state.data
    }
}


const NavigationContainer = connect(mapStateToProps, null)(Navigation)

export default NavigationContainer;