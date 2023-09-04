import { useEffect, useState } from 'react';
import './App.css';
import SelectOption from './components/SelectOption';
import ConversionType from './data/ConversionType';
import UnitList from './data/UnitList'

function App() {

  const [unitList, setUnitList] = useState([])
  const [askLeft, setAskLeft] = useState()
  const [askRight, setAskRight] = useState()
  const [leftOption, setLeftOption] = useState()
  const [rightOption, setRightOption] = useState()

  const handelChangeUnitType = (selectedConversion) => {
    setUnitList(() => {
      return UnitList.filter((item) => item.type === selectedConversion)
    })
  }
  useEffect(() => {
    setLeftOption(() => unitList.length !== 0 ? unitList[0].value : '')
    setRightOption(() => unitList.length !== 0 ? unitList[1].value : '')
  }, [handelChangeUnitType])

  const handelChangeAskLeft = (e) => {
    const leftValue = e.target.value
    setAskLeft(leftValue)

    actionCreator(leftOption, rightOption, leftValue, 'updateRight')
    console.log(leftOption, rightOption, leftValue, 'updateRight')
  }

  const handelChangeAskRight = (e) => {
    const rightValue = e.target.value
    setAskRight(rightValue)

    actionCreator(rightOption, leftOption, rightValue, 'updateLeft')
  }

  const handelChangeLeftOption = (selectedValue) => {
    setLeftOption(selectedValue)

    // actionCreator(leftOption, rightOption, askLeft, 'updateRight')
  }

  const handelChangeRightOption = (selectedValue) => {
    setRightOption(selectedValue)

    // actionCreator(rightOption, leftOption, askRight, 'updateLeft')

  }


  const actionCreator = (from, to, val, updateField) => {

    switch (from && to) {
      //Convert Weight
      //Pound to Other
      case ('lb' && 'kg'):
        if (updateField === 'updateRight') {
          setAskRight(val / 2.2046)
        } else {
          setAskLeft(val / 2.2046)
        }
        break;
      case ('lb' && 'oz'):
        if (updateField === 'updateRight') {
          setAskRight(val * 16)
        } else {
          setAskLeft(val * 16)
        }
        break;
      case ('lb' && 'g'):
        if (updateField === 'updateRight') {
          setAskRight(val / 0.0022046)
        } else {
          setAskLeft(val / 0.0022046)
        }
        break;
      case ('lb' && 'st'):
        if (updateField === 'updateRight') {
          setAskRight(val * 0.071429)
        } else {
          setAskLeft(val * 0.071429)
        }
        break;
      //Kilogram to other
      case ('kg' && 'lb'):
        if (updateField === 'updateRight') {
          setAskRight(val * 2.2046)
        } else {
          setAskLeft(val * 2.2046)
        }
        break;
      case ('kg' && 'oz'):
        if (updateField === 'updateRight') {
          setAskRight(val * 35.274)
        } else {
          setAskLeft(val * 35.274)
        }
        break;
      case ('kg' && 'g'):
        console.log(from, to, val, updateField)

        if (updateField === 'updateRight') {
          console.log(val)
          setAskRight(val * 1000)
        } else {
          setAskLeft(val * 1000)
        }
        break;
      case ('kg' && 'st'):
        if (updateField === 'updateRight') {
          setAskRight(val * 0.1574)
        } else {
          setAskLeft(val * 0.1574)
        }
        break;
      //Ounces to other
      case ('oz' && 'lb'):
        if (updateField === 'updateRight') {
          setAskRight(val * 0.0625)
        } else {
          setAskLeft(val * 0.0625)
        }
        break;
      case ('oz' && 'kg'):
        if (updateField === 'updateRight') {
          setAskRight(val / 35.274)
        } else {
          setAskLeft(val / 35.274)
        }
        break;
      case ('oz' && 'g'):
        if (updateField === 'updateRight') {
          setAskRight(val / 0.035274)
        } else {
          setAskLeft(val / 0.035274)
        }
        break;
      case ('oz' && 'st'):
        if (updateField === 'updateRight') {
          setAskRight(val / 0.0044643)
        } else {
          setAskLeft(val / 0.0044643)
        }
        break;
      //Grams to other
      case ('g' && 'lb'):
        if (updateField === 'updateRight') {
          setAskRight(val * 0.0022046)
        } else {
          setAskLeft(val * 0.0022046)
        }
        break;
      case ('g' && 'kg'):
        if (updateField === 'updateRight') {
          setAskRight(val / 1000)
        } else {
          setAskLeft(val / 1000)
        }
        break;
      case ('g' && 'oz'):
        if (updateField === 'updateRight') {
          setAskRight(val * 0.035274)
        } else {
          setAskLeft(val * 0.035274)
        }
        break;
      case ('g' && 'st'):
        if (updateField === 'updateRight') {
          setAskRight(val * 0.00015747)
        } else {
          setAskLeft(val * 0.00015747)
        }
        break;
      //Stones to other
      case ('st' && 'lb'):
        if (updateField === 'updateRight') {
          setAskRight(val * 14)
        } else {
          setAskLeft(val * 14)
        }
        break;
      case ('st' && 'kg'):
        if (updateField === 'updateRight') {
          setAskRight(val / 0.15747)
        } else {
          setAskLeft(val / 0.15747)
        }
        break;
      case ('st' && 'oz'):
        if (updateField === 'updateRight') {
          setAskRight(val * 224)
        } else {
          setAskLeft(val * 224)
        }
        break;
      case ('st' && 'g'):
        if (updateField === 'updateRight') {
          setAskRight(val / 0.00015747)
        } else {
          setAskLeft(val / 0.00015747)
        }
        break;

      //Convert Temperature
      //Fahrenheit to other
      case ('f' && 'c'):
        if (updateField === 'updateRight') {
          setAskRight((val - 32) * 5 / 9)
        } else {
          setAskLeft((val - 32) * 5 / 9)
        }
        break;
      case ('f' && 'k'):
        if (updateField === 'updateRight') {
          setAskRight(((val - 32) / 1.8) + 273.15)
        } else {
          setAskLeft(((val - 32) / 1.8) + 273.15)
        }
        break;

      //Celsius to other
      case ('c' && 'f'):
        if (updateField === 'updateRight') {
          setAskRight((val * 1.8) + 32)
        } else {
          setAskLeft((val * 1.8) + 32)
        }
        break;
      case ('c' && 'k'):
        if (updateField === 'updateRight') {
          setAskRight(val + 273.15)
        } else {
          setAskLeft(val + 273.15)
        }
        break;

      //Kelvin to other
      case ('k' && 'f'):
        if (updateField === 'updateRight') {
          setAskRight(((val - 273.15) * 1.8) + 32)
        } else {
          setAskLeft(((val - 273.15) * 1.8) + 32)
        }
        break;
      case ('k' && 'c'):
        if (updateField === 'updateRight') {
          setAskRight(val - 273.15)
        } else {
          setAskLeft(val - 273.15)
        }
        break;

      default:
        break;
    }
  }

  return (
    <>
      <div className="container-fluid">
        <div className='main-sidebar'>
          <nav>
          </nav>
        </div>
        <div className='main-content'>
          <form>
            <div className="row">
              <div className="col-12">
                <SelectOption data={ConversionType} callback={handelChangeUnitType} styleClass='form-select' />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-5">
                <div className="mb-3">
                  <input className='form-control' type='number' value={askLeft || ''} onChange={handelChangeAskLeft} />
                  <SelectOption data={unitList} defaultValue={leftOption} callback={handelChangeLeftOption} styleClass='form-select' />
                </div>
              </div>
              <div className="col-sm-2">=</div>
              <div className="col-sm-5">
                <div className="mb-3">
                  <input className='form-control' type='number' value={askRight || ''} onChange={handelChangeAskRight} />
                  <SelectOption data={unitList} defaultValue={rightOption} callback={handelChangeRightOption} styleClass='form-select' />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
