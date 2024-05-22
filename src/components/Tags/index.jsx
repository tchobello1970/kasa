import '../../sass/Tags.scss';


/**
 * Tags Component
 * 
 * This component renders a list of tags. Each tag is displayed within a div element
 * with the class name 'tag'. The tags are passed as a prop to this component.
 * 
 * @param {Object} props - The props object.
 * @param {Array<string>} props.tags - The array of tags to be displayed.
 * 
 * @returns {JSX.Element} A React component that displays a list of tags.
 */

function Tags({ tags }) {
    return (
      <div className='tags'>
        {tags.map(tag => ( <div key={tag} className='tag'>{tag}</div>))}
      </div>
    );
  }
  
export default Tags;