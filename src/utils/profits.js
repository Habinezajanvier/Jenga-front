/* eslint-disable import/no-anonymous-default-export */
import EngineeringIcon from '@mui/icons-material/Engineering';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import WorkIcon from '@mui/icons-material/Work';

const styles = {
  fontSize: '3.2rem',
  color: '#3E8E7E',
};

export default [
  {
    title: 'Choose freelancers',
    content:
      "No job is too big or too small. We've got freelancers for jobs of any size or budget, across 1000+ skills. No job is too complex. We can get it done!",
    icon: <EngineeringIcon style={styles} />,
  },
  {
    title: 'Pay safely',
    content:
      "Only pay for work when it has been completed and you're 100% satisfied with the quality using our milestone payment system.",
    icon: <LocalAtmIcon style={styles} />,
  },
  {
    title: 'We’re here to help',
    content:
      'Our talented team of recruiters can help you find the best freelancer for the job and our technical co-pilots can even manage the project for you.',
    icon: <AssignmentIndIcon style={styles} />,
  },
  {
    title: 'Post a job',
    content:
      'It’s free and easy to post a job. Simply fill in a title, description and budget and competitive bids come within minutes.',
    icon: <WorkIcon style={styles} />,
  },
];
