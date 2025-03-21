import re

def preprocess_text(ocr_text):
    # Remove unnecessary newlines and extra spaces
    lines = [line.strip() for line in ocr_text.split("\n") if line.strip()]
    
    # Extract date if available
    date_pattern = re.compile(r'\d{2}-\d{2}-\d{4}')
    date = None
    for line in lines:
        if date_pattern.search(line):
            date = date_pattern.search(line).group()
            break  # Stop after finding the first date

    # Extract items
    items = []
    for line in lines:
        match = re.match(r'(.+?) - (\d+)(g|kg|L|ml)? - \$([\d.]+)', line)
        if match:
            product = match.group(1).strip()
            quantity = float(match.group(2))
            unit = match.group(3) if match.group(3) else "unit"
            price = float(match.group(4))

            items.append({
                "product": product,
                "quantity": quantity,
                "unit": unit,
                "price": price
            })

    return {"date": date, "items": items}
