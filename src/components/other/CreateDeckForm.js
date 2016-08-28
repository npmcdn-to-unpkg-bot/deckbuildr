import React from 'react';
import toastr from 'toastr';
import { connect } from 'react-redux';
import { createDeck, createCategory } from '../../actions/actionCreators';
import { Link } from 'react-router';

/*
  Describes a form to create decks with
 */
class CreateDeckForm extends React.Component {
  constructor () {
    super();

    // Bind this to event handler functions
    this.onSubmitCreateDeck = this.onSubmitCreateDeck.bind(this);
  }

  /**
   * Dispatches an action to create a deck. Also shows a corresponding toast and redirects you afterwards.
   * @param e
   */
  onSubmitCreateDeck (e) {
    e.preventDefault();
    const { title, description, category } = this;
    const deck = {
      title: title.value,
      description: description.value,
      category: category.value
    };

    this.props.dispatch(createDeck(deck));
    toastr.success('Your deck was successfully saved!');
    this.context.router.push('/decks');
  }

  render () {
    // Map categories to option elements to dynamically show available categories
    const options = this.props.categories.map(category => <option key={category.name} value={category.name}>{category.name}</option>)

    return (
      <section>
        <h1>create a new deck</h1>
        <Link to="/decks"><span className="glyphicon glyphicon-arrow-left"></span></Link>
        <form onSubmit={this.onSubmitCreateDeck}>
          <label htmlFor="title">Deck title</label>
          <div className="input-group">
            <input
              type="text"
              id="title"
              className="form-control"
              name="title"
              ref={(ref) => { this.title = ref; }}
            />
          </div>
          <label htmlFor="description">Deck description</label>
          <div className="input-group">
            <input
              type="text"
              id="description"
              className="form-control"
              name="description"
              ref={(ref) => { this.description = ref; }}
              required
            />
          </div>
          <label htmlFor="category">Deck category</label>
          <div className="input-group">
            <select
              id="category"
              className="form-control"
              name="category"
              ref={(ref) => { this.category = ref; }}
            >
            {options}
            </select>
          </div>
          <button type="submit" className="btn btn-success">Create deck</button>
        </form>
      </section>
    )
  }
}

CreateDeckForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

const mapStateToProps = state => {
  return {
    categories: state.categoryIds
      .map(categoryId => state.categoriesById[categoryId])
  }
}
export default connect(mapStateToProps)(CreateDeckForm);