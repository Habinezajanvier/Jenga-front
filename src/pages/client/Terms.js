import * as React from 'react';
import { Box, Container } from '@mui/material';
import termsMd from '../../assets/documents/terms.md';
import Markdown from '../../components/Privacy/Markdown';

export default function TermsAndConditions() {
  document.title = 'Terms and Conditions | Jenga';
  const [termsContent, setTermsContent] =
    React.useState('');

  React.useEffect(() => {
    fetch(termsMd)
      .then((res) => res.text())
      .then((text) => {
        setTermsContent(text);
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
          {termsContent}
        </Markdown>
      </Container>
    </Box>
  );
}
