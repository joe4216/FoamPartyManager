# Foam Works Party Co - Design Guidelines

## Design Approach

**Hybrid Strategy**: Customer-facing pages draw inspiration from **Airbnb** (service booking, visual storytelling) and **Eventbrite** (event scheduling). Owner portal follows **Material Design** principles for data-heavy dashboard functionality.

## Typography

**Fonts**: Poppins (headings, bold and playful) + Inter (body, clean readability)

**Hierarchy**:
- Hero headline: 4xl-6xl, bold (800)
- Section headers: 2xl-3xl, semibold (600)
- Body text: base-lg, regular (400)
- Button text: base, medium (500)

## Layout System

**Spacing**: Tailwind units of 4, 6, 8, 12, 16, 20 for consistent rhythm
- Section padding: py-16 md:py-24
- Component gaps: gap-6 md:gap-8
- Card padding: p-6 md:p-8

**Container**: max-w-7xl with px-4 md:px-6 lg:px-8

## Customer-Facing Pages

### Homepage Structure (8 sections)

1. **Hero Section** (90vh): Full-width background image with foam party action, centered content overlay with logo, slogan "Foaming Around and Find Out", primary CTA "Book Your Party", secondary "View Packages". Buttons with backdrop-blur background.

2. **Quick Stats Bar**: 4-column grid (mobile stacks) showing trust indicators - "500+ Parties", "100% Foam Guarantee", "Same-Day Delivery", "All Ages Welcome"

3. **Featured Packages**: 3-column card grid (responsive to 1-col mobile) with package cards showing machine image, title, pricing, features list, capacity, duration, "Book Now" button

4. **How It Works**: 4-step timeline with numbered icons showing booking process: Select Package → Choose Date → Confirm Details → Party Time

5. **Photo Gallery**: Masonry grid (3-4 columns desktop, 2 mobile) showcasing foam party events, happy customers, machines in action. Lightbox on click.

6. **Machine Showcase**: 2-column alternating layout with large machine photos + detailed specs (coverage area, foam output, power requirements, setup time)

7. **Testimonials**: Carousel with 3 visible cards showing customer photos, quotes, star ratings, event type

8. **Booking CTA Section**: Split layout - left side has compelling imagery, right side has "Ready to Foam?" heading with booking button and contact info

### Booking Flow

Interactive multi-step modal/dedicated page:
- Step 1: Package selection with visual cards
- Step 2: Calendar picker (flatpickr-style) with availability indicators
- Step 3: Time slot selection with duration
- Step 4: Customer details form (name, email, phone, address, party size)
- Step 5: Confirmation with booking summary and total

## Owner Portal

### Dashboard Layout

**Sidebar Navigation** (w-64, fixed): Logo, navigation links (Dashboard, Calendar, Kanban, Orders, Customers, Settings), user profile at bottom

**Main Content Area**: Header bar with page title + quick actions + notifications

### Calendar View

Full-calendar style monthly/weekly views with:
- Color-coded bookings (Pending: yellow, Confirmed: green, Completed: blue, Cancelled: red)
- Click to view/edit booking details in side panel
- Add booking button (top-right)
- Filter controls (status, package type, date range)

### Kanban Board

4 columns: Pending Requests | Confirmed | In Progress | Completed
- Draggable cards with customer name, package, date, revenue
- Card click opens detailed view
- Color-coded borders matching calendar status

## Component Library

**Buttons**: 
- Primary: Bold, rounded-lg, shadow-md, py-3 px-8
- Secondary: Outlined variant with hover fill
- Blur variant: backdrop-blur-md bg-white/20 for image overlays

**Cards**: 
- Package cards: rounded-xl, shadow-lg, overflow-hidden, hover lift effect
- Booking cards: border-l-4 with status color, p-4
- Testimonial cards: rounded-lg with customer photo circle overlay

**Forms**: 
- Input fields: rounded-md, border-2, focus ring
- Date picker: Custom styled with brand colors
- Dropdown: Rounded with chevron icon

**Navigation**: 
- Customer: Sticky header with transparent-to-solid scroll effect
- Portal: Fixed sidebar with active state indicators

## Images

**Required Images**:
1. **Hero**: Wide-angle foam party scene with excited people covered in foam (1920x1080)
2. **Package Cards**: Professional foam machine photos on white background (3 images, 600x400)
3. **Gallery**: 12-15 diverse party photos - kids parties, adult events, outdoor/indoor (various sizes for masonry)
4. **Machine Showcase**: Detailed product shots from multiple angles (4 images, 800x600)
5. **Testimonial Photos**: Customer headshots (6-8 circular crops, 200x200)
6. **Booking CTA**: Energetic foam action shot (800x1000)

## Interactive Elements

**Micro-interactions**:
- Card hover: Subtle lift (translateY -2px) + shadow expansion
- Button hover: Scale 102%, brightness increase
- Image gallery: Smooth fade-in on scroll (use intersection observer)
- Calendar cells: Gentle pulse on hover for available dates
- Kanban cards: Smooth drag with ghost preview

**Animations**: Minimal, purposeful only
- Hero: Fade-in stagger for headline → slogan → buttons (0.2s delays)
- Scroll reveals: Fade-up for section entries
- Modal transitions: Scale + fade (0.3s cubic-bezier)

## Visual Identity

**Brand Personality**: Fun, energetic, reliable, family-friendly
**Tone**: Playful but professional - this is a legitimate business that happens to be fun
**Key Visual Motifs**: Bubbles/circles as decorative elements, wave patterns as dividers, rounded corners throughout for friendly feel