# Trustpilot Integration

This project includes Trustpilot integration to display customer reviews and ratings.

## Configuration

### 1. Get Your Business Unit ID

1. Log in to your Trustpilot Business account
2. Navigate to: https://businessapp.b2b.trustpilot.com/#/integrations/trustbox
3. Copy your Business Unit ID

### 2. Set Environment Variable

Create a `.env.local` file in the root directory (or add to your existing one):

```
NEXT_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID=your_business_unit_id_here
```

Replace `your_business_unit_id_here` with your actual Business Unit ID from Trustpilot.

## Components

### TrustpilotReviews

A full-width review carousel section that displays customer reviews. This is integrated into the homepage.

**Location**: `src/components/TrustpilotReviews/index.tsx`

**Usage**:
```jsx
import TrustpilotReviews from "@/components/TrustpilotReviews";

<TrustpilotReviews />
```

### Trustpilot (Mini Widget)

A compact Trustpilot widget showing the star rating. This is integrated into the footer.

**Location**: `src/components/Trustpilot/index.tsx`

**Usage**:
```jsx
import Trustpilot from "@/components/Trustpilot";

<Trustpilot
  templateId="5419b6a8b0d04a076446a9ad" // Mini template
  height="24px"
  width="100%"
  theme="dark" // or "light"
/>
```

## Integration Points

1. **Homepage** (`src/app/page.tsx`): Full review carousel section
2. **Footer** (`src/components/Layout/Footer/index.tsx`): Mini star rating widget
3. **Layout** (`src/app/layout.tsx`): Trustpilot script loader

## Customization

### Available Template IDs

You can customize the Trustpilot widget by changing the `templateId`:

- `5419b6a8b0d04a076446a9ad` - Mini (default in footer)
- `54ad5defc6454f065c28af8b` - Carousel (default in reviews section)
- `539ad60defb9600b94d7df2c` - Grid
- `53aa8807dec7e10d38f59f32` - List

Visit [Trustpilot TrustBox Library](https://businessapp.b2b.trustpilot.com/#/integrations/trustbox) to see all available widgets.

## Testing

The Trustpilot widgets will display a link to your Trustpilot profile even if the widget hasn't loaded yet, ensuring good SEO and fallback functionality.

For testing without a Business Unit ID, the widgets will show a placeholder link.
