var container = document.getElementById('container');
var TodoAppCom = React.createClass({
    render: function () {
        getInitialState : function() {
            return {
                todos : []
            }   
        }

        return (
            <div className="TodoMain">
                <div id="head">
                    <form>
                        <input type="text" placeholder="Write your text here">
                        </input>
                        <br></br>
                        <input type="submit" value="Add" className="btn btn-primary">
                        </input>
                    </form>
                </div>
            </div>
        );
    }
})
ReactDOM.render(
    <TodoAppCom/>,
    container
)