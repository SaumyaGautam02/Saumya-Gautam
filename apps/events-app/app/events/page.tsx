import { Metadata } from 'next';
import ListingPage from '../components/ListingPage';

export const metadata: Metadata = {
  title: 'Events Manager - Manage Your Events',
  description: 'Add, search, and manage your events with our easy-to-use event management system.',
};

export default function EventsPage() {
  return <ListingPage />;
}
