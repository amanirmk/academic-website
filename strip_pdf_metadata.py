from pypdf import PdfReader, PdfWriter  # <--- pip install pypdf
from pathlib import Path

publications = list(Path("public/publications").rglob("*.pdf"))
print(publications)
presentations = list(Path("public/presentations").rglob("*.pdf"))
print(presentations)
cv = [] # [Path("public/cv-filename.pdf")] <---- add your CV here!

# If you've taken the steps in the above comments, you're ready to run this script!

pdf_files = publications + presentations + cv

print(f"Processing {len(pdf_files)} file(s)")
for pdf_file in pdf_files:
    print(f"Processing: {pdf_file.name}...", end=" ")
    
    try:
        reader = PdfReader(pdf_file)
        writer = PdfWriter()
        
        for page in reader.pages:
            writer.add_page(page)
                
        temp_file = pdf_file.with_suffix('.tmp.pdf')
        with open(temp_file, "wb") as f:
            writer.write(f)
        
        temp_file.replace(pdf_file)
        
        print("✓ Done")
    except Exception as e:
        print(f"✗ Error: {e}")

print(f"Processed {len(pdf_files)} file(s)")