import { useState } from "react"
import '../App.css';
import './bai3.css';

const InputShortener = ({ setInputValue }) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    setInputValue(value);
    setValue("");
  }

  return (
    <div className="yup">
      <div className="conTaiNer">
        <h1>URL <span>Shortener</span></h1>
        <div>
          <span>Enter a Link</span>
          <input
            type="text"
            placeholder="Paste a link to shorten it"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <button onClick={handleClick}>shorten</button>
        </div>
        <div className="bt">
          <span>Short domain:</span>
          <button type="sudmit" className="btn">Shrco.de</button>
          <button type="sudmit" className="btn">9qr.de</button>
          <button type="sudmit" className="btn">Shili.link</button>
        </div>
      </div>
    </div>
  )
}

export default InputShortener