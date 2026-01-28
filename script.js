// --- DỮ LIỆU CÂU HỎI (MBTI: 40 câu, DISC: 40 câu) ---
const MBTI_DATA = [
    {id:1,g:1,q:"Trong một buổi tiệc, bạn sẽ:",a:"Nói chuyện với tất cả mọi người, kể cả người lạ",b:"Nói chuyện với những người bạn quen"},
    {id:2,g:1,q:"Tại các buổi gặp mặt, bạn sẽ:",a:"Ở lại đến cuối buổi, càng lúc càng phấn khích",b:"Ra về sớm và cảm thấy mệt"},
    {id:3,g:1,q:"Bạn là người:",a:"Luôn nắm bắt kịp thời thông tin về các vấn đề của mọi người",b:"Thường biết thông tin sau"},
    {id:4,g:1,q:"Khi nói chuyện điện thoại, bạn:",a:"Hiếm khi băn khoăn đến những điều mình sẽ nói",b:"Thường chuẩn bị trước những điều mình sẽ nói"},
    {id:5,g:1,q:"Trong công ty, bạn là người:",a:"Khởi xướng các câu chuyện",b:"Đợi người khác khởi xướng để nói chuyện"},
    {id:6,g:1,q:"Đối mặt với những vấn đề mới, bạn thường:",a:"Thấy kích thích và hào hứng",b:"Cảm thấy mệt mỏi"},
    {id:7,g:1,q:"Bạn thích kiểu nào hơn:",a:"Nhiều bạn bè với mức độ tiếp xúc ngắn gọn",b:"Một vài bạn thân với mức độ tiếp xúc sâu"},
    {id:8,g:1,q:"Bạn có thấy mình:",a:"Dễ dàng bắt chuyện với người lạ",b:"Có ít điều để nói với người lạ"},
    {id:9,g:1,q:"Khi chuông điện thoại reo, bạn sẽ:",a:"Là người đầu tiên nhấc máy để nghe",b:"Hi vọng có người khác sẽ nhấc máy"},
    {id:10,g:1,q:"Bạn có xu hướng:",a:"Là người dễ tiếp cận",b:"Ở mức độ nào đó là người kín đáo"},
    {id:11,g:2,q:"Xu hướng nào trong bạn mạnh hơn:",a:"Hướng tới những điều thực tế và cụ thể",b:"Hướng tới các dự đoán trong tương lai"},
    {id:12,g:2,q:"Tuýp người nào sẽ thu hút bạn hơn:",a:"Người có đầu óc xét đoán, biết điều",b:"Người có khả năng tưởng tượng phong phú"},
    {id:13,g:2,q:"Bạn hứng thú hơn với:",a:"Những việc thực tế xảy ra",b:"Những việc có khả năng xảy ra"},
    {id:14,g:2,q:"Theo bạn, các nhà văn nên:",a:"Viết những gì họ nghĩ một cách rõ ràng",b:"Diễn đạt sự việc bằng cách so sánh, liên tưởng"},
    {id:15,g:2,q:"Theo bạn, 'các sự việc, sự kiện':",a:"Bản thân nó giải thích cho chính nó",b:"Nó là bằng chứng giải thích cho các quy tắc, quy luật"},
    {id:16,g:2,q:"Trẻ em thường không:",a:"Tự mình phát huy hết năng lực",b:"Thỏa mãn hết trí tưởng tượng của mình"},
    {id:17,g:2,q:"Thường thì bạn là:",a:"Người thực tế",b:"Người có khả năng tưởng tượng phong phú"},
    {id:18,g:2,q:"Bạn có xu hướng tin tưởng vào:",a:"Kinh nghiệm của mình",b:"Linh cảm của mình"},
    {id:19,g:2,q:"Bạn cho mình là người như thế nào:",a:"Là người thực tế hơn là khéo léo, mưu trí",b:"Là người khéo léo, mưu trí hơn là thực tế"},
    {id:20,g:2,q:"Bạn đánh giá cao điều gì trong mình hơn:",a:"Cảm nhận tốt các yếu tố thực tế",b:"Trí tưởng tượng phong phú, rực rỡ"},
    {id:21,g:3,q:"Bạn thấy ấn tượng bởi:",a:"Nguyên lý, nguyên tắc",b:"Cảm xúc, tình cảm"},
    {id:22,g:3,q:"Bạn có xu hướng nghiêng về:",a:"Những gì có tính thuyết phục",b:"Những gì cảm động"},
    {id:23,g:3,q:"Khi đánh giá người khác, bạn thường:",a:"Dựa trên các quy định, luật lệ",b:"Dựa trên hoàn cảnh cụ thể"},
    {id:24,g:3,q:"Khi tiếp cận người khác, bạn nghiêng về:",a:"Tiếp cận khách quan",b:"Tiếp cận cá nhân"},
    {id:25,g:3,q:"Điều gì lôi cuốn bạn hơn:",a:"Sự nhất quán về tư duy, suy nghĩ",b:"Sự hòa hợp trong các mối quan hệ con người"},
    {id:26,g:3,q:"Bạn là người:",a:"Có cái đầu lạnh",b:"Có trái tim ấm"},
    {id:27,g:3,q:"Khi đưa ra các quyết định, bạn thiên về:",a:"Các tiêu chuẩn, quy định",b:"Cảm xúc, cảm nhận"},
    {id:28,g:3,q:"Cái đầu hay trái tim chi phối bạn nhiều hơn:",a:"Cái đầu",b:"Trái tim"},
    {id:29,g:3,q:"Bạn thích được khen là:",a:"Một người có logic rất tốt",b:"Một người rất tình cảm, tinh tế"},
    {id:30,g:3,q:"Bạn có xu hướng nhiều hơn về:",a:"Công bằng, vô tư",b:"Thông cảm, đồng cảm"},
    {id:31,g:4,q:"Bạn thích làm việc:",a:"Theo thời hạn (deadline)",b:"Tùy hứng"},
    {id:32,g:4,q:"Phong cách đúng với bạn hơn:",a:"Đúng giờ",b:"Nhàn nhã, thoải mái"},
    {id:33,g:4,q:"Bạn bồn chồn khi có những việc:",a:"Chưa hoàn thiện",b:"Đã hoàn thiện"},
    {id:34,g:4,q:"Bạn thích những điều:",a:"Được định trước",b:"Chưa được quyết định"},
    {id:35,g:4,q:"Mọi người nên để các sự kiện xảy ra:",a:"Theo sự lựa chọn và cân nhắc kĩ lưỡng",b:"Diễn ra ngẫu nhiên, tự nhiên"},
    {id:36,g:4,q:"Khả năng nào đáng khâm phục hơn:",a:"Khả năng tổ chức và làm việc có phương pháp",b:"Khả năng thích ứng và xoay xở trước mọi tình huống"},
    {id:37,g:4,q:"Bạn có xu hướng tìm kiếm những điều:",a:"Theo trật tự, thứ tự",b:"Ngẫu nhiên"},
    {id:38,g:4,q:"Bạn thường thích:",a:"Một tuyên bố cuối cùng, không thay đổi",b:"Một tuyên bố dự kiến, ban đầu"},
    {id:39,g:4,q:"Mọi việc sẽ hợp lý hơn nếu:",a:"Được chuẩn bị trước",b:"Diễn ra tự nhiên"},
    {id:40,g:4,q:"Bạn thích:",a:"Sự kiện có kế hoạch trước",b:"Sự kiện không có kế hoạch trước"}
];

const DISC_DATA = [
    {id:1,opts:[{t:'D',txt:'Cá tính mạnh mẽ'},{t:'S',txt:'Tốt bụng, nhẹ nhàng'},{t:'S',txt:'Chấp nhận mọi việc đến'},{t:'I',txt:'Được mọi người ngưỡng mộ'}]},
    {id:2,opts:[{t:'D',txt:'Khó thư giãn'},{t:'I',txt:'Vòng tròn bạn bè rộng'},{t:'S',txt:'Sẵn lòng giúp đỡ'},{t:'C',txt:'Cư xử đúng đắn, chuẩn mực'}]},
    {id:3,opts:[{t:'S',txt:'Làm theo chỉ dẫn'},{t:'C',txt:'Ngăn nắp, gọn gàng'},{t:'D',txt:'Không để ai hạ thấp mình'},{t:'I',txt:'Thích tận hưởng niềm vui'}]},
    {id:4,opts:[{t:'C',txt:'Tôn trọng chính quyền'},{t:'D',txt:'Thích rủi ro, cái mới'},{t:'I',txt:'Tin mọi việc sẽ tốt đẹp'},{t:'S',txt:'Luôn sẵn lòng giúp đỡ'}]},
    {id:5,opts:[{t:'C',txt:'Gọn gàng, ngăn nắp'},{t:'D',txt:'Năng động trong việc làm'},{t:'S',txt:'Bình tĩnh và nhẹ nhàng'},{t:'I',txt:'Luôn có cách riêng của mình'}]},
    {id:6,opts:[{t:'S',txt:'Hài lòng với cuộc sống'},{t:'I',txt:'Hay tin tưởng mọi người'},{t:'S',txt:'Thích hòa bình, yên tĩnh'},{t:'I',txt:'Thái độ rất tích cực'}]},
    {id:7,opts:[{t:'D',txt:'Sức mạnh ý chí lớn'},{t:'S',txt:'Chú ý lời người khác nói'},{t:'C',txt:'Bắt buộc phải cố gắng'},{t:'I',txt:'Luôn vui vẻ'}]},
    {id:8,opts:[{t:'D',txt:'Tự tin vào bản thân'},{t:'S',txt:'Dễ cảm thông'},{t:'S',txt:'Khoan dung với cuộc sống'},{t:'D',txt:'Quyết đoán trong hành động'}]},
    {id:9,opts:[{t:'S',txt:'Không bao giờ mất bình tĩnh'},{t:'C',txt:'Chính xác và đúng đắn'},{t:'D',txt:'Chắc chắn về bản thân'},{t:'I',txt:'Thích cười và trêu đùa'}]},
    {id:10,opts:[{t:'C',txt:'Hành vi rất kỷ luật'},{t:'S',txt:'Thấy mình hữu ích'},{t:'I',txt:'Luôn di chuyển, năng động'},{t:'C',txt:'Kiên trì đến cùng'}]},
    {id:11,opts:[{t:'D',txt:'Thích cạnh tranh'},{t:'I',txt:'Không quá nghiêm túc'},{t:'S',txt:'Quan tâm đến người khác'},{t:'S',txt:'Là người dễ chịu'}]},
    {id:12,opts:[{t:'I',txt:'Rất thuyết phục'},{t:'S',txt:'Dịu dàng, ôn hòa'},{t:'S',txt:'Khiêm tốn'},{t:'I',txt:'Nhiều ý tưởng mới'}]},
    {id:13,opts:[{t:'S',txt:'Hữu ích với mọi người'},{t:'C',txt:'Không thích số phận cám dỗ'},{t:'D',txt:'Không bỏ cuộc dễ dàng'},{t:'I',txt:'Mọi người thích ở cạnh'}]},
    {id:14,opts:[{t:'C',txt:'Thận trọng'},{t:'D',txt:'Quyết đoán'},{t:'I',txt:'Giỏi thuyết phục'},{t:'S',txt:'Thân thiện'}]},
    {id:15,opts:[{t:'D',txt:'Không sợ hãi'},{t:'I',txt:'Hay động viên người khác'},{t:'C',txt:'Sẵn sàng theo mệnh lệnh'},{t:'S',txt:'Khá nhút nhát'}]},
    {id:16,opts:[{t:'S',txt:'Sẵn lòng thay đổi ý kiến'},{t:'D',txt:'Thích tranh luận'},{t:'I',txt:'Hay dịch chuyển'},{t:'I',txt:'Luôn nhìn mặt tươi sáng'}]},
    {id:17,opts:[{t:'I',txt:'Quảng giao'},{t:'S',txt:'Kiên nhẫn'},{t:'D',txt:'Tự lập'},{t:'S',txt:'Hiếm khi cao giọng'}]},
    {id:18,opts:[{t:'S',txt:'Sẵn sàng với mọi thứ'},{t:'D',txt:'Muốn thử điều mới'},{t:'S',txt:'Không thích tranh luận'},{t:'I',txt:'Tinh thần cao'}]},
    {id:19,opts:[{t:'D',txt:'Nắm bắt cơ hội'},{t:'I',txt:'Dễ tiếp thu ý tưởng'},{t:'S',txt:'Lịch sự, nhã nhặn'},{t:'S',txt:'Ôn hòa'}]},
    {id:20,opts:[{t:'S',txt:'Dễ tha thứ'},{t:'S',txt:'Nhạy cảm'},{t:'I',txt:'Nhiều năng lượng'},{t:'I',txt:'Kết hợp được với mọi người'}]},
    {id:21,opts:[{t:'I',txt:'Thích trò chuyện'},{t:'C',txt:'Kiểm soát cảm xúc'},{t:'D',txt:'Hay đưa ra quan điểm'},{t:'D',txt:'Quyết định nhanh'}]},
    {id:22,opts:[{t:'S',txt:'Giữ cảm xúc cho riêng mình'},{t:'C',txt:'Coi trọng độ chính xác'},{t:'D',txt:'Thích nói lên suy nghĩ'},{t:'S',txt:'Rất thân thiện'}]},
    {id:23,opts:[{t:'S',txt:'Giải quyết bằng ngoại giao'},{t:'D',txt:'Táo bạo'},{t:'I',txt:'Thoải mái'},{t:'S',txt:'Hài lòng với cuộc sống'}]},
    {id:24,opts:[{t:'S',txt:'Ngoan ngoãn'},{t:'I',txt:'Sẵn sàng đi đây đó'},{t:'S',txt:'Trung thành'},{t:'I',txt:'Có sức quyến rũ'}]},
    {id:25,opts:[{t:'I',txt:'Tích cực'},{t:'D',txt:'Nhiều cá tính'},{t:'S',txt:'Dễ gần'},{t:'S',txt:'Rụt rè'}]},
    {id:26,opts:[{t:'I',txt:'Giỏi động viên'},{t:'S',txt:'Kiên nhẫn là điểm mạnh'},{t:'C',txt:'Cẩn thận lời nói'},{t:'D',txt:'Muốn giành chiến thắng'}]},
    {id:27,opts:[{t:'S',txt:'Dễ tiếp cận'},{t:'S',txt:'Thích giúp đỡ'},{t:'C',txt:'Suy nghĩ thấu đáo'},{t:'D',txt:'Thích xong việc ngay'}]},
    {id:28,opts:[{t:'C',txt:'Giỏi phân tích'},{t:'D',txt:'Nhanh bồn chồn'},{t:'S',txt:'Nghĩ cho người khác'},{t:'S',txt:'Thoải mái, dễ gần'}]},
    {id:29,opts:[{t:'D',txt:'Thích làm chủ tình huống'},{t:'I',txt:'Thích sự náo nhiệt'},{t:'S',txt:'Thích sự ổn định'},{t:'C',txt:'Thích sự chi tiết'}]},
    {id:30,opts:[{t:'D',txt:'Thẳng thắn'},{t:'I',txt:'Truyền cảm hứng'},{t:'S',txt:'Hiền lành'},{t:'C',txt:'Cẩn trọng'}]},
    {id:31,opts:[{t:'D',txt:'Tập trung vào kết quả'},{t:'I',txt:'Tập trung vào con người'},{t:'S',txt:'Tập trung vào sự hỗ trợ'},{t:'C',txt:'Tập trung vào quy trình'}]},
    {id:32,opts:[{t:'D',txt:'Nhanh nhẹn'},{t:'I',txt:'Vui vẻ'},{t:'S',txt:'Từ tốn'},{t:'S',txt:'Chu đáo'}]},
    {id:33,opts:[{t:'D',txt:'Thách thức'},{t:'I',txt:'Thuyết phục'},{t:'C',txt:'Cam kết'},{t:'C',txt:'Chính xác'}]},
    {id:34,opts:[{t:'D',txt:'Mạnh dạn'},{t:'I',txt:'Hào hứng'},{t:'S',txt:'Điềm đạm'},{t:'C',txt:'Kỹ lưỡng'}]},
    {id:35,opts:[{t:'D',txt:'Tự tin'},{t:'I',txt:'Cởi mở'},{t:'S',txt:'Chu đáo'},{t:'C',txt:'Logic'}]},
    {id:36,opts:[{t:'D',txt:'Quyết liệt'},{t:'I',txt:'Hoạt ngôn'},{t:'S',txt:'Ôn hòa'},{t:'C',txt:'Nghiêm túc'}]},
    {id:37,opts:[{t:'D',txt:'Độc lập'},{t:'I',txt:'Nhiệt tình'},{t:'S',txt:'Thấu hiểu'},{t:'C',txt:'Kỷ luật'}]},
    {id:38,opts:[{t:'D',txt:'Thực tế'},{t:'I',txt:'Bay bổng'},{t:'S',txt:'Hòa nhã'},{t:'C',txt:'Cẩn thận'}]},
    {id:39,opts:[{t:'D',txt:'Ưa hoạt động'},{t:'I',txt:'Thích khen ngợi'},{t:'S',txt:'Thích an toàn'},{t:'C',txt:'Thích sự thật'}]},
    {id:40,opts:[{t:'D',txt:'Kiên quyết'},{t:'I',txt:'Linh hoạt'},{t:'S',txt:'Tận tâm'},{t:'C',txt:'Khách quan'}]}
];

const CAREERS = [
    {m:['E','T','J'],d:['D','C'],f:'QUẢN LÝ',j:'CEO, Quản lý dự án, Vận hành',e:'Mục tiêu rõ, KPI, quyền quyết định'},
    {m:['E','T'],d:['D','I'],f:'KINH DOANH',j:'Sales B2B, BizDev, Thị trường',e:'Giao tiếp, chiến lược, ảnh hưởng'},
    {m:['S','T','J'],d:['C'],f:'TÀI CHÍNH',j:'Kế toán, Kiểm toán, Ngân hàng',e:'Chuẩn mực, số liệu, quy trình'},
    {m:['T','J'],d:['C','D'],f:'PHÂN TÍCH',j:'Data Analyst, Đầu tư',e:'Đánh giá rủi ro, logic'},
    {m:['S','T','J'],d:['D','C'],f:'LUẬT',j:'Luật sư, Hành chính công',e:'Quy định rõ, tranh luận logic'},
    {m:['E','T'],d:['I','D'],f:'MARKETING',j:'Brand Manager, PR, Truyền thông',e:'Sáng tạo có mục tiêu'},
    {m:['S','J'],d:['C'],f:'Y TẾ',j:'Bác sĩ, Dược sĩ, Xét nghiệm',e:'Chính xác, quy trình'},
    {m:['E','F'],d:['I','S'],f:'DỊCH VỤ',j:'Nhân sự (HR), CSKH, Giáo viên',e:'Kết nối con người, hỗ trợ'},
    {m:['I','F'],d:['S','C'],f:'SÁNG TẠO',j:'Designer, Writer, Content',e:'Tự do, không gian riêng'},
    {m:['I','T'],d:['C'],f:'KỸ THUẬT',j:'Developer, Kỹ sư hệ thống',e:'Logic, kỹ thuật sâu'}
];

const app = {
    init: function() {
        this.renderMBTI();
        this.renderDISC();
        this.updateProgress();
    },

    renderMBTI: function() {
        const html = MBTI_DATA.map(q => `
            <div class="q-card">
                <span class="q-title">Câu ${q.id}: ${q.q}</span>
                <div class="options-grid">
                    <label class="opt-label">
                        <input type="radio" name="m_${q.id}" value="A" onchange="app.updateProgress()">
                        <span>A. ${q.a}</span>
                    </label>
                    <label class="opt-label">
                        <input type="radio" name="m_${q.id}" value="B" onchange="app.updateProgress()">
                        <span>B. ${q.b}</span>
                    </label>
                </div>
            </div>
        `).join('');
        document.getElementById('mbti-list').innerHTML = html;
    },

    renderDISC: function() {
        const html = DISC_DATA.map(q => `
            <div class="q-card">
                <span class="q-title">Câu ${q.id}: Chọn mô tả giống bạn nhất</span>
                <div class="options-grid">
                    ${q.opts.map(o => `
                        <label class="opt-label">
                            <input type="radio" name="d_${q.id}" value="${o.t}" onchange="app.updateProgress()">
                            <span>${o.txt}</span>
                        </label>
                    `).join('')}
                </div>
            </div>
        `).join('');
        document.getElementById('disc-list').innerHTML = html;
    },

    updateProgress: function() {
        const total = MBTI_DATA.length + DISC_DATA.length;
        const checked = document.querySelectorAll('input[type="radio"]:checked').length;
        const pct = (checked / total) * 100;
        document.getElementById('progressBar').style.width = pct + '%';
    },

    switchTab: function(id) {
        document.querySelectorAll('.tab-content').forEach(e => e.classList.remove('active'));
        document.querySelectorAll('.tab-btn').forEach(e => e.classList.remove('active'));
        
        document.getElementById(id).classList.add('active');
        
        // Active button highlight logic
        const btns = document.querySelectorAll('.tab-btn');
        if(id === 'mbti') btns[0].classList.add('active');
        if(id === 'disc') btns[1].classList.add('active');

        // Auto scroll to content
        window.scrollTo({top: 150, behavior: 'smooth'});
    },

    calculate: function() {
        // Check progress
        const checked = document.querySelectorAll('input[type="radio"]:checked').length;
        if(checked < 80) {
            if(!confirm(`Bạn mới hoàn thành ${checked}/80 câu. Kết quả có thể không chính xác. Bạn có muốn xem ngay không?`)) return;
        }

        // 1. Calc MBTI
        let s = {E:0,I:0,S:0,N:0,T:0,F:0,J:0,P:0};
        MBTI_DATA.forEach(q => {
            const v = document.querySelector(`input[name="m_${q.id}"]:checked`)?.value;
            if(v) {
                if(q.g===1) v==='A'?s.E++:s.I++;
                if(q.g===2) v==='A'?s.S++:s.N++;
                if(q.g===3) v==='A'?s.T++:s.F++;
                if(q.g===4) v==='A'?s.J++:s.P++;
            }
        });
        const mbti = (s.E>=s.I?'E':'I')+(s.S>=s.N?'S':'N')+(s.T>=s.F?'T':'F')+(s.J>=s.P?'J':'P');

        // 2. Calc DISC
        let dScore = {D:0,I:0,S:0,C:0};
        DISC_DATA.forEach(q => {
            const v = document.querySelector(`input[name="d_${q.id}"]:checked`)?.value;
            if(v) dScore[v]++;
        });
        const disc = Object.keys(dScore).reduce((a,b)=>dScore[a]>dScore[b]?a:b);

        // Show Results
        document.getElementById('res-mbti').innerText = mbti;
        document.getElementById('res-disc').innerText = `Nhóm ${disc}`;
        document.getElementById('desc-mbti').innerText = this.getMBTIDesc(mbti);
        document.getElementById('desc-disc').innerText = this.getDISCDesc(disc);

        // Career Match
        const tbody = document.getElementById('career-body');
        tbody.innerHTML = '';
        let found = false;
        
        CAREERS.forEach(c => {
            // Match Logic: Flexible (Match DISC + at least 2 MBTI letters)
            let mMatch = 0; c.m.forEach(t => { if(mbti.includes(t)) mMatch++; });
            const dMatch = c.d.includes(disc);

            if(dMatch && mMatch >= 2) {
                found = true;
                tbody.innerHTML += `<tr>
                    <td><strong>${c.f}</strong></td>
                    <td>${c.j}</td>
                    <td>${c.e}</td>
                </tr>`;
            }
        });
        document.getElementById('no-match').style.display = found ? 'none' : 'block';

        document.getElementById('result-modal').style.display = 'block';
    },

    resetTest: function() {
        if(!confirm("Xóa toàn bộ câu trả lời và làm lại từ đầu?")) return;
        document.querySelectorAll('input').forEach(i => i.checked = false);
        this.updateProgress();
        this.switchTab('mbti');
        window.scrollTo({top:0, behavior:'smooth'});
        document.getElementById('result-modal').style.display = 'none';
    },

    getMBTIDesc: function(t) {
        const dict = {
            'ISTJ':'Người trách nhiệm', 'ISFJ':'Người nuôi dưỡng', 'INFJ':'Người che chở', 'INTJ':'Nhà chiến lược',
            'ISTP':'Nhà kỹ thuật', 'ISFP':'Người nghệ sĩ', 'INFP':'Người lý tưởng', 'INTP':'Nhà tư duy',
            'ESTP':'Người thực thi', 'ESFP':'Người trình diễn', 'ENFP':'Người truyền cảm hứng', 'ENTP':'Người nhìn xa',
            'ESTJ':'Người điều hành', 'ESFJ':'Người quan tâm', 'ENFJ':'Người chỉ dẫn', 'ENTJ':'Nhà lãnh đạo'
        };
        return dict[t] || '';
    },

    getDISCDesc: function(t) {
        const dict = {'D':'Thống trị - Quyết đoán', 'I':'Ảnh hưởng - Nhiệt tình', 'S':'Kiên định - Trầm ổn', 'C':'Tuân thủ - Chính xác'};
        return dict[t] || '';
    }
};

// Khởi chạy ứng dụng
app.init();