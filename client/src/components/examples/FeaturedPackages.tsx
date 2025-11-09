import FeaturedPackages from '../FeaturedPackages'

export default function FeaturedPackagesExample() {
  return <FeaturedPackages onBookClick={(pkg) => console.log('Book:', pkg)} />
}
