// user input - includes validation
function TodoForm({addTodo}){
  const [value,setValue] = React.useState('');
  
  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }

	return (
    <div className="commentForm vert-offset-top-2">
      <hr></hr>
      <div className="clearfix">
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <span className="input-group-text"><b>Task</b></span>
              <input type="text" className="form-control" 
              value={value}
              placeholder="Add Todo..." 
              onChange={e => setValue(e.target.value)} />
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-2 text-right">
              <input type="submit" value="Add Item" className="btn btn-primary" onClick={handleSubmit} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );

}