import zipfile
import os

def extract_zip(zip_path, extract_to='extracted_logo'):
    with zipfile.ZipFile(zip_path, 'r') as zip_ref:
        zip_ref.extractall(extract_to)
    print(f'Extracted to {extract_to}')

if __name__ == '__main__':
    extract_zip('logo.zip')
