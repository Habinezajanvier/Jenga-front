import * as React from 'react';
import { Box, Container } from '@mui/material';
import privacyMd from '../../assets/documents/privacy.md';
import Markdown from '../../components/Privacy/Markdown';

export default function PrivacyPolicy() {
  document.title = 'Privacy Policy | Jenga';
  const [privacyContent, setPrivacyContent] =
    React.useState('');

  React.useEffect(() => {
    fetch(privacyMd)
      .then((res) => res.text())
      .then((text) => {
        setPrivacyContent(text);
      });
  }, []);
  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        paddingTop: '100px',
        marginBottom: { sm: '60px', md: '100px' },
        '& .markdown': {
          '& h1': {
            color: 'primary.main',
            fontWeight: '700',
          },
          '& h2': {
            color: 'primary.main',
            fontWeight: '600',
            mt: 4,
            mb: 3,
          },
        },
      }}
    >
      <Container maxWidth="lg">
        <Markdown className="markdown">
          {privacyContent}
        </Markdown>
      </Container>
    </Box>
  );
}
