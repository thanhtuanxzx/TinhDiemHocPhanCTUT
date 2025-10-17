document.addEventListener('DOMContentLoaded', function() {
    const componentsContainer = document.getElementById('components-container');
    const addComponentBtn = document.getElementById('add-component-btn');
    const prefillBtn = document.getElementById('prefill-btn');
    const gradeForm = document.getElementById('grade-form');
    const resultDiv = document.getElementById('result');
    const currentTotalWeightEl = document.getElementById('current-total-weight');
    
    // CTUT configuration (Trường ĐH Kỹ Thuật - Công Nghệ Cần Thơ)
    const CTUT_RULES = {
        minFinalExamWeightRatio: 0.5, // ĐKTHP chiếm tối thiểu 50% tổng trọng số
        inputScaleMax: 10, // thang điểm 0-10
        roundingDecimals: 1, // làm tròn 1 chữ số thập phân cho ĐHP
        // Bảng quy đổi điểm chữ và hệ 4
        mapLetterAndGpa: function(finalScore) {
            // finalScore đã làm tròn 1 chữ số
            if (finalScore >= 9.5) return { letter: 'A+', gpa4: 4.0, classification: 'Giỏi' };
            if (finalScore >= 8.5) return { letter: 'A',  gpa4: 3.8, classification: 'Giỏi' };
            if (finalScore >= 8.0) return { letter: 'B+', gpa4: 3.5, classification: 'Khá' };
            if (finalScore >= 7.0) return { letter: 'B',  gpa4: 3.0, classification: 'Khá' };
            if (finalScore >= 6.5) return { letter: 'C+', gpa4: 2.5, classification: 'Trung bình' };
            if (finalScore >= 5.5) return { letter: 'C',  gpa4: 2.0, classification: 'Trung bình' };
            if (finalScore >= 5.0) return { letter: 'D+', gpa4: 1.5, classification: 'Trung bình yếu' };
            if (finalScore >= 4.0) return { letter: 'D',  gpa4: 1.0, classification: 'Trung bình yếu' };
            return { letter: 'F', gpa4: 0.0, classification: 'Kém' };
        }
    };

    const updateTotalWeight = () => {
        let totalWeight = 0;
        const rows = componentsContainer.querySelectorAll('.component-row');
        rows.forEach(row => {
            const weightInput = row.querySelector('.component-weight');
            const weight = parseFloat(weightInput.value);
            if (!isNaN(weight) && weight > 0) {
                totalWeight += weight;
            }
        });
        currentTotalWeightEl.textContent = `${totalWeight}%`;

        currentTotalWeightEl.classList.remove('text-blue-600', 'text-green-600', 'text-red-600');
        if (totalWeight > 100) {
            currentTotalWeightEl.classList.add('text-red-600');
        } else if (totalWeight === 100) {
            currentTotalWeightEl.classList.add('text-green-600');
        } else {
            currentTotalWeightEl.classList.add('text-blue-600');
        }
    };

    const createComponentRow = (name = '', weight = '', score = '', isFinal = false) => {
        const row = document.createElement('div');
        row.className = 'grid grid-cols-12 gap-2 md:gap-4 items-center component-row p-1.5 hover:bg-slate-50 rounded-lg';
        
        row.innerHTML = `
            <div class="col-span-5">
                <input type="text" class="form-input w-full bg-slate-100 border-transparent rounded-md focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-blue-500" placeholder="VD: Chuyên cần" value="${name}">
            </div>
            <div class="col-span-2">
                <input type="number" class="form-input component-weight w-full bg-slate-100 border-transparent rounded-md text-center focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-blue-500" placeholder="%" min="0" max="100" step="1" value="${weight}">
            </div>
            <div class="col-span-2">
                <input type="number" class="form-input component-score w-full bg-slate-100 border-transparent rounded-md text-center focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-blue-500" placeholder="Điểm" min="0" max="${CTUT_RULES.inputScaleMax}" step="0.1" value="${score}">
            </div>
            <div class="col-span-2 flex justify-center">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600 rounded-sm border-slate-300 focus:ring-blue-500 component-final" ${isFinal ? 'checked' : ''}>
            </div>
            <div class="col-span-1 flex justify-center">
                <button type="button" class="remove-btn text-slate-400 hover:text-red-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
                </button>
            </div>
        `;
        componentsContainer.appendChild(row);
    };

    const clearAllRows = () => {
        componentsContainer.innerHTML = '';
    };

    const prefillExample = () => {
        clearAllRows();
        createComponentRow('Chuyên cần', 10, 9.0, false);
        createComponentRow('Bài tập', 20, 8.5, false);
        createComponentRow('Giữa kỳ (ĐGHP)', 20, 8.0, false);
        createComponentRow('Thi kết thúc học phần (ĐKTHP)', 50, 7.5, true);
        updateTotalWeight();
    };

    // Khởi tạo mặc định 2 dòng tham khảo nếu không có preset
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('preset') === 'example') {
        prefillExample();
    } else {
        createComponentRow('Điểm giữa học phần (ĐGHP)', 40, '', false);
        createComponentRow('Điểm kết thúc học phần (ĐKTHP)', 60, '', true);
        updateTotalWeight();
    }

    addComponentBtn.addEventListener('click', () => {
        createComponentRow();
        updateTotalWeight();
    });

    prefillBtn?.addEventListener('click', () => {
        prefillExample();
    });

    componentsContainer.addEventListener('click', function(e) {
        if (e.target.closest('.remove-btn')) {
            e.target.closest('.component-row').remove();
            updateTotalWeight();
        }
    });

    componentsContainer.addEventListener('change', function(e) {
        if (e.target.classList.contains('component-final')) {
            if (e.target.checked) {
                document.querySelectorAll('.component-final').forEach(checkbox => {
                    if (checkbox !== e.target) checkbox.checked = false;
                });
            }
        }
    });

    componentsContainer.addEventListener('input', function(e) {
        if (e.target.classList.contains('component-score')) {
            if (parseFloat(e.target.value) > CTUT_RULES.inputScaleMax) {
                alert(`Điểm không hợp lệ. Vui lòng chỉ nhập điểm trong thang điểm ${CTUT_RULES.inputScaleMax}.`);
                e.target.value = '';
            }
        }
        if (e.target.classList.contains('component-weight')) {
            updateTotalWeight();
        }
    });

    gradeForm.addEventListener('submit', function(event) {
        event.preventDefault();

        let totalWeightedScore = 0;
        let totalWeight = 0;
        let finalExamScore = null;
        let finalExamWeight = 0;
        let hasInput = false;

        const rows = componentsContainer.querySelectorAll('.component-row');
        rows.forEach(row => {
            const weightInput = row.querySelector('.component-weight');
            const scoreInput = row.querySelector('.component-score');
            
            const weight = parseFloat(weightInput.value);
            const score = parseFloat(scoreInput.value);

            if (!isNaN(weight) && !isNaN(score) && weight > 0) {
                hasInput = true;
                totalWeight += weight;
                totalWeightedScore += score * (weight / 100);
                
                if (row.querySelector('.component-final').checked) {
                    finalExamScore = score;
                    finalExamWeight = weight;
                }
            }
        });
        
        if (!hasInput) {
            alert('Vui lòng nhập ít nhất một cột điểm có trọng số và điểm số hợp lệ.');
            return;
        }

        if (totalWeight > 100) {
            alert('Tổng trọng số đã vượt quá 100%. Vui lòng kiểm tra lại.');
            resultDiv.classList.add('hidden');
            return;
        }

        // CTUT: bắt buộc có điểm kết thúc học phần và tối thiểu 50% trọng số
        if (finalExamScore === null) {
            alert('Cần đánh dấu cột có "Thi cuối kỳ?" (ĐKTHP) theo quy định CTUT.');
            resultDiv.classList.add('hidden');
            return;
        }
        if (totalWeight === 0 || finalExamWeight / totalWeight < CTUT_RULES.minFinalExamWeightRatio) {
            alert('Trọng số ĐKTHP phải chiếm tối thiểu 50% tổng trọng số theo quy định CTUT.');
            resultDiv.classList.add('hidden');
            return;
        }

        const roundedFinal = Math.round(totalWeightedScore * Math.pow(10, CTUT_RULES.roundingDecimals)) / Math.pow(10, CTUT_RULES.roundingDecimals);
        const finalScore = parseFloat(roundedFinal.toFixed(CTUT_RULES.roundingDecimals));
        let letterGrade, classification, status, statusClass, score4, note = '';

        const noteEl = document.getElementById('note');
        if (totalWeight < 100) {
            note = `Lưu ý: Tổng trọng số hiện tại là ${totalWeight}%, không phải 100%.`;
            noteEl.className = 'text-center font-medium mt-4 text-sm text-orange-600';
        } else {
            note = '';
            noteEl.className = 'text-center font-medium mt-4 text-sm';
        }
        
        // Mapping CTUT theo Điều 23 và 24
        const mapped = CTUT_RULES.mapLetterAndGpa(finalScore);
        letterGrade = mapped.letter;
        score4 = mapped.gpa4;
        classification = mapped.classification;
        
        const isFailed = letterGrade === 'F';
        if (isFailed) {
            noteEl.classList.add('text-red-600');
        }
        status = isFailed ? 'Không đạt' : 'Đạt';
        statusClass = isFailed ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700';

        document.getElementById('total-weight').textContent = `${totalWeight}%`;
        document.getElementById('final-score').textContent = finalScore.toFixed(CTUT_RULES.roundingDecimals);
        document.getElementById('score-4').textContent = score4.toFixed(1);
        document.getElementById('letter-grade').textContent = letterGrade;
        document.getElementById('classification').textContent = classification;
        
        const statusEl = document.getElementById('status');
        statusEl.textContent = status;
        statusEl.className = `font-bold text-xl px-4 py-1.5 rounded-full ${statusClass}`;
        
        noteEl.innerHTML = note;

        resultDiv.classList.remove('hidden');
    });
});
