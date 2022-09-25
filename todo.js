function Todo({todo,index,remove}){
  function handle(){
    remove(index);
  }
  return (
    <div className="list-group-item list-group-item-action list-group-item-secondary">
      <div className="d-flex justify-content-between">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
          <label class="form-check-label" for="flexCheckDefault">
            <div class="fs-5">{todo.text}</div>
          </label>
        </div>
      <button type="button" className="btn btn-xs btn-danger btn-space img-circle" onClick={handle}>X</button>
      </div>
    </div>
    )
}
