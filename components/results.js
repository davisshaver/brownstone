export const Results = ({ cost, text, error }) => 
<div>
  {text}
  <h1>{cost.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</h1>
  <p>{error}</p>
  <style jsx>{`
    div {
      background: #595959;
      padding: 10px 20px;
      width: 100%;
      text-align: center;
      color: #fff;
    }
  `}</style>
</div>

export default Results;