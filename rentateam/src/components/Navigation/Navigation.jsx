import React, {useState} from 'react';
import { connect } from 'react-redux';
import NavigationItem from './NavigationItem';

const Navigation = ({ data }) => {

    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="navigation">
            <div className="container">
                <div className="navigation__wrapper">
                    <div className="burger">
                        <button className={`burger__btn ${isOpen && 'burger__btn--open'} `} onClick={() => setIsOpen(!isOpen)}><span></span></button>
                    </div>
                    <ul className={`navigation__list ${isOpen && 'navigation__list--open'}`}>
                        {
                            data.categoryes.map(item => <NavigationItem key={item.id} setIsOpen={setIsOpen} item={item} />)
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