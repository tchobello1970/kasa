import '../../sass/Layout.scss';

/**
 * Component for a basic layout wrapper.
 * Renders a simple div element and embeds the children within it.
 *
 * @param {Object} props - The props object containing children elements.
 * @returns {JSX.Element} A div element wrapping the children.
 */

function Layout({ children }) {
  return (
    <div className="layout">
      {children}
    </div>
  );
}

export default Layout;