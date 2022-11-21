import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'eben', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'sister', id: 2 },
        {title: 'Web dev top tips', body: 'lorem ipsum...', author: 'eben', id: 3}
    ]);
    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" />
            <BlogList  blogs={blogs.filter((blog) =>blog.author === 'eben' )} title="Eben's Blogs" />
        </div>
     );
}
 
export default Home;