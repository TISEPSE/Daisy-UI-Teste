import './App.css'

function App() {

  return (
    <>
    <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">TISEPSE</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Link</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>

     <div className="flex justify-center items-center">
  <div className="card bg-base-100 w-96 shadow-sm border border-secondary">
    <figure>
      <img
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        alt="Les chaussures zbi" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">Card Title</h2>
      <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default App
