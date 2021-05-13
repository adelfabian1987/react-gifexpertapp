import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GiffGrid } from './components/GiffGrid';
//import PropTypes from 'prop-types'

const GifExpertApp = props => {   
    
    const [ categorias, setCategorias] = useState(['One Punch']);

    return (
        <>            
            <h2>GifExpertApp</h2>
            <AddCategory setCategorias={ setCategorias }/>
            <hr />                   
            <ol>
                {
                    categorias.map( categoria => 
                        <GiffGrid 
                            key={ categoria }
                            category={ categoria } 
                        /> 
                    )
                }
            </ol>
            <hr/>
        </>
    )
}
/*GifExpertApp.propTypes = {
}*/

export default GifExpertApp