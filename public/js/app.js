class ProductList extends React.Component {
    render() {
        return (
            <div className='ui stackable items'>
                Im react component mofo!
            </div>
        ) 
    }
}

ReactDOM.render(
    <ProductList />,
    document.getElementById('content')
);