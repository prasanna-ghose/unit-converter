import React from 'react'

const SelectOption = (props) => {
    const defaultValue = props.defaultValue
    const data = props.data || []
    const select = props.callback
    const styleClass = props.styleClass

    if (data.length == null) {
        return ''
    }else{
        return (
            <select onChange={(e) => select(e.target.value)} className={styleClass} defaultValue={defaultValue}>
                {
                    data.map(({option, value}) => {
                        return <option key={option.toString()} value={value}>{option}</option>
                    })
                }
            </select>
        )
    }
    
}

export default SelectOption