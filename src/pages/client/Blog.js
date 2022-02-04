/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import Main from '../../components/Blog';
import Sidebar from '../../components/Blog/SideBar';
import post1 from '../../utils/dummyPost/post1.md';
import post2 from '../../utils/dummyPost/post2.md';
import post3 from '../../utils/dummyPost/post3.md';

const posts = [post1, post2, post3];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

export default function Blog() {
  const [mdPosts, setPosts] = React.useState([]);
  document.title = 'Blog | Jenga';

  React.useEffect(() => {
    posts.map((post) =>
      fetch(post)
        .then((res) => res.text())
        .then((text) => {
          setPosts([...mdPosts, text]);
        })
    );
  }, []);

  return (
    <Container maxWidth="lg">
      <main>
        <Grid container spacing={5} sx={{ mt: 20 }}>
          <Main title="From our Website" posts={mdPosts} />
          <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives}
            social={sidebar.social}
          />
        </Grid>
      </main>
    </Container>
  );
}
