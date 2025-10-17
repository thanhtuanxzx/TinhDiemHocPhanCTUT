# 🎓 CTUT Course Grade Calculator

A simple web-based tool designed to help students at **Can Tho University of Technology (CTUT)** calculate their **final course grades** according to CTUT’s credit-based regulations.

---

## 📋 Table of Contents
- [✨ Key Features](#-key-features)
- [🚀 How to Use](#-how-to-use)
- [📐 CTUT Grading Policy](#-ctut-grading-policy)
- [🛠️ Technologies Used](#️-technologies-used)
- [⬇️ Install & Run](#️-install--run)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👨‍💻 Author](#-author)
- [⚠️ Disclaimer](#️-disclaimer)

---

## ✨ Key Features (CTUT)

- **Customizable Interface**  
  Add or remove component score columns to match the grading structure of each specific course.

- **Automatic & Detailed Calculations**  
  The tool calculates and displays:
  - Final score (10-point scale, rounded to 1 decimal)  
  - Converted GPA (4-point scale per CTUT)  
  - Letter grade (A+, A, B+, B, C+, C, D+, D, F)  
  - Course classification

- **CTUT Final Exam Rule**  
  The final exam (ĐKTHP) is required and must be **≥ 50%** of total weight.

- **Modern & Responsive UI**  
  Clean, intuitive design that works seamlessly on both **desktop** and **mobile devices**.

- **Built-in Help (FAQ)**  
  Question mark icons **(?)** provide quick explanations for each column to assist new users.

- **Smart Validation Alerts**  
  Warns if total weight ≠ 100%; blocks if > 100%; enforces ĐKTHP ≥ 50%.

---

## 🚀 How to Use

1. **Open the Tool**  
   Launch the file `index.html` using any web browser *(Chrome, Firefox, Safari, etc.)*.

2. **Input Course Data**  
   - Default example: **ĐGHP 40% + ĐKTHP 60%**.  
   - You can **rename**, **delete**, or **add new columns** with `+ Thêm Cột Điểm`.  
   - Enter **Tên Cột Điểm**, **Trọng số (%)**, **Điểm (0–10)**.

3. **Mark the Final Exam (ĐKTHP)**  
   Tick the **ĐKTHP?** checkbox for the final exam row. Only one row should be marked. The final exam weight must be **≥ 50%** of total.

4. **View Results**  
   Click **“Tính toán Kết quả”** to view:
   - Final score (rounded to 1 decimal)  
   - GPA (4-point scale per CTUT)  
   - Letter grade & classification  
   - Warnings/notes (e.g., total weight < 100%)

5. **Official Regulation**  
   CTUT regulation PDF: `https://phongctct.ctuet.edu.vn/wp-content/uploads/2023/04/493_qd_quydinh_daotao_trinhdo_daihoc_chinhquy_theo_hethong_tinchi.pdf`

---

## 📐 CTUT Grading Policy

1) **Components** (Điều 20):
   - ĐBTKTTX, ĐNTTL, ĐTBTTH, ĐCC, ĐGHP, ĐTL, **ĐKTHP**.
   - **ĐKTHP bắt buộc** và chiếm **≥ 50%** tổng trọng số.

2) **Examples** (Điều 20):
   - ĐHP = 60% ĐKTHP + 40% ĐGHP  
   - ĐHP = 70% ĐKTHP + 20% ĐGHP + 10% ĐNT/ĐCC  
   - ĐHP = 50% ĐKTHP + 20% ĐGHP + 30% ĐTL

3) **Scale & Letter Grade** (Điều 23): 0 → 10, làm tròn 1 chữ số.

| Loại      | Điểm số | Điểm chữ | Xếp loại       |
| --------- | ------- | -------- | -------------- |
| Đạt       | 9.5–10  | A+       | Giỏi           |
|           | 8.5–9.4 | A        | Giỏi           |
|           | 8.0–8.4 | B+       | Khá            |
|           | 7.0–7.9 | B        | Khá            |
|           | 6.5–6.9 | C+       | Trung bình     |
|           | 5.5–6.4 | C        | Trung bình     |
|           | 5.0–5.4 | D+       | Trung bình yếu |
|           | 4.0–4.9 | D        | Trung bình yếu |
| Không đạt | 0.0–3.9 | F        | Kém            |

4) **GPA (Hệ 4) mapping** (Điều 24):

| Điểm chữ | Hệ số 4 |
| -------- | ------- |
| A+       | 4.0     |
| A        | 3.8     |
| B+       | 3.5     |
| B        | 3.0     |
| C+       | 2.5     |
| C        | 2.0     |
| D+       | 1.5     |
| D        | 1.0     |
| F        | 0.0     |

5) **Semester/Accumulated GPA** (Điều 24):  
\[ A = \frac{\sum_{i=1}^{n} a_i \times n_i}{\sum_{i=1}^{n} n_i} \]  
Trong đó: \(a_i\) là điểm hệ 4 học phần i, \(n_i\) là số tín chỉ học phần i.  
Làm tròn 2 chữ số thập phân.

> Nguồn: Quy định CTUT (PDF). `https://phongctct.ctuet.edu.vn/wp-content/uploads/2023/04/493_qd_quydinh_daotao_trinhdo_daihoc_chinhquy_theo_hethong_tinchi.pdf`

---

## 🛠️ Technologies Used
---

## ⬇️ Install & Run

This is a static web app.

- Open `index.html` directly in your browser, or
- Serve locally (recommended) to avoid file URL restrictions:

```bash
npx serve .
```

Then open the printed local URL in your browser.

---

## 🤝 Contributing

Contributions are welcome! Please open an issue or pull request on GitHub.

Repo: `https://github.com/thanhtuanxzx/TinhDiemHocPhanCTUT`

---

## 📄 License

MIT License. See `LICENSE` for details.

| Technology | Description |
|-------------|-------------|
| **HTML5** | Provides the foundational structure of the web interface |
| **Tailwind CSS** | Enables fast, responsive, and modern UI development |
| **Vanilla JavaScript** | Handles all calculations and interactivity without external libraries |

---

## 👨‍💻 Author

Developed by **Thanhtuanxyx**

## 📦 Repository

Project repository: `https://github.com/thanhtuanxzx/TinhDiemHocPhanCTUT`

---

## ⚠️ Disclaimer

This tool is intended **for educational and reference purposes only**.  
👉 Always verify with CTUT’s official channels and the regulation above.

---

> 📘 *Open-source project – please credit the author when sharing or modifying this tool.*
