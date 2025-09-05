 // Estado do Jogo
        let gameState = {
            lives: 5,
            score: 0,
            level: 1,
            currentChallenge: 0,
            selectedEpis: []
        };
        
        // Banco de EPIs
        const epis = {
            'EPI_CAPACETE_B': { name: 'Capacete  Classe B', icon: '⛑️' },
            'EPI_VISEIRA_FACIAL': { name: 'Viseira Facial', icon: '🥽' },
            'EPI_BOTINA_ISOLANTE': { name: 'Botina Isolante', icon: '👢' },
            'EPI_LUVA_ISOLANTE': { name: 'Luva Isolante', icon: '🧤' },
            'EPI_OCULOS': { name: 'Óculos de Proteção', icon: '👓' },
            'EPI_PROTETOR_AURICULAR': { name: 'Protetor Auricular', icon: '🎧' },
            'EPI_MASCARA': { name: 'Máscara', icon: '😷' },
            'EPI_CINTO': { name: 'Cinto de Segurança', icon: '🦺' },
            'EPI_LUVA_CORTE': { name: 'Luva Anticorte', icon: '🧤🔪' },
            'EPI_RESPIRADOR': { name: 'Respirador com Filtro Químico', icon: '🫁' },
            'EPI_AVENTAL': { name: 'Avental de Segurança', icon: '🥼' },
            'EPI_COLETE_REFLETIVO': { name: 'Colete Refletivo', icon: '🦺✨' },
            'EPI_PROTETOR_SOLAR': { name: 'Protetor Solar', icon: '🌞🧴' },
            'EPI_PROTETOR_SOLDADOR': { name: 'Máscara de Solda', icon: '🔫😷' },
            'EPI_TAPETE_ISOLANTE': { name: 'Tapete Isolante', icon: '🪟' }
        };
        
        // Banco de Desafios
        const challenges = [
            {
                id: 'ELET_001',
                text: 'Você precisa substituir um disjuntor neste painel. Quais EPIs são essenciais?',
                correctEpis: ['EPI_CAPACETE_B', 'EPI_VISEIRA_FACIAL', 'EPI_BOTINA_ISOLANTE'],
                successMessage: 'Parabéns! Com os EPIs corretos, a tarefa foi executada em total segurança.',
                failMessage: 'Cuidado! A proteção facial e isolamento são essenciais para trabalhos elétricos.',
                points: 100
            },
            {
                id: 'ELET_002',
                text: 'Corte de chapas metálicas com serra elétrica. Quais EPIs devem ser usados?',
                correctEpis: ['EPI_CAPACETE_B', 'EPI_OCULOS', 'EPI_LUVA_CORTE', 'EPI_PROTETOR_AURICULAR', 'EPI_BOTINA_ISOLANTE'],
                successMessage: 'Ótimo! Você está protegido contra cortes, faíscas e ruídos.',
                failMessage: 'Atenção! Luvas anticorte e óculos são indispensáveis nesse tipo de atividade.',
                points: 150
            },
            {
                id: 'ELET_003',
                text: 'Manutenção em quadro energizado de baixa tensão. Selecione os EPIs necessários.',
                correctEpis: ['EPI_CAPACETE_B', 'EPI_VISEIRA_FACIAL', 'EPI_LUVA_ISOLANTE', 'EPI_BOTINA_ISOLANTE'],
                successMessage: 'Excelente! Você está totalmente protegido contra choques elétricos.',
                failMessage: 'Atenção! Luvas isolantes são fundamentais para trabalhos em circuitos energizados.',
                points: 150
            },
            {
                id: 'ELET_004',
                text: 'Inspeção visual de instalações elétricas. Quais EPIs são necessários?',
                correctEpis: ['EPI_CAPACETE_B', 'EPI_OCULOS', 'EPI_BOTINA_ISOLANTE'],
                successMessage: 'Muito bem! Mesmo em inspeções, a segurança é prioridade.',
                failMessage: 'Lembre-se: mesmo sem contato direto, a proteção básica é importante.',
                points: 80
            },
            {
                id: 'ELET_005',
                text: 'Manutenção elétrica em painel de média tensão sobre tapete isolante. Quais EPIs são obrigatórios?',
                correctEpis: ['EPI_CAPACETE_B', 'EPI_VISEIRA_FACIAL', 'EPI_LUVA_ISOLANTE', 'EPI_BOTINA_ISOLANTE', 'EPI_TAPETE_ISOLANTE'],
                successMessage: 'Excelente! Proteção garantida contra riscos elétricos de média tensão.',
                failMessage: 'Atenção! O tapete isolante é indispensável nesse cenário.',
                points: 220
            },
            {
                id: 'ELET_006',
                text: 'Trabalho em altura com eletricidade. Selecione todos os EPIs necessários.',
                correctEpis: ['EPI_CAPACETE_B', 'EPI_VISEIRA_FACIAL', 'EPI_LUVA_ISOLANTE', 'EPI_BOTINA_ISOLANTE', 'EPI_CINTO'],
                successMessage: 'Perfeito! Proteção dupla: contra choques e quedas!',
                failMessage: 'Não esqueça: trabalho em altura exige cinto de segurança!',
                points: 200
            },
            {
                id: 'ELET_007',
                text: 'Aplicação de solventes em peças mecânicas. Quais EPIs são necessários?',
                correctEpis: ['EPI_MASCARA', 'EPI_RESPIRADOR', 'EPI_OCULOS', 'EPI_LUVA_ISOLANTE', 'EPI_AVENTAL'],
                successMessage: 'Perfeito! A exposição química foi controlada.',
                failMessage: 'Cuidado! Produtos químicos exigem respirador e avental de proteção.',
                points: 170
            },
            {
                id: 'ELET_008',
                text: 'Operação de esmerilhadeira em oficina. Quais EPIs devem ser utilizados?',
                correctEpis: ['EPI_OCULOS', 'EPI_PROTETOR_AURICULAR', 'EPI_LUVA_CORTE', 'EPI_AVENTAL'],
                successMessage: 'Excelente! Proteção contra faíscas, cortes e ruído garantida.',
                failMessage: 'Óculos e luvas anticorte são indispensáveis!',
                points: 160
            },
            {
                id: 'ELET_009',
                text: 'Inspeção de máquinas em funcionamento com alto ruído. Quais EPIs devem ser usados?',
                correctEpis: ['EPI_PROTETOR_AURICULAR', 'EPI_CAPACETE_B', 'EPI_OCULOS'],
                successMessage: 'Correto! A audição foi protegida em ambiente ruidoso.',
                failMessage: 'Sem protetor auricular, há risco de perda auditiva.',
                points: 100
            },
            {
                id: 'ELET_010',
                text: 'Transporte manual de chapas metálicas afiadas. Quais EPIs são obrigatórios?',
                correctEpis: ['EPI_LUVA_CORTE', 'EPI_BOTINA_ISOLANTE', 'EPI_CAPACETE_B'],
                successMessage: 'Muito bem! Você evitou cortes e esmagamentos.',
                failMessage: 'Luvas anticorte são indispensáveis ao manusear chapas.',
                points: 130
            },
            {
                id: 'ELET_011',
                text: 'Limpeza de reservatório com produtos corrosivos. Quais EPIs são essenciais?',
                correctEpis: ['EPI_RESPIRADOR', 'EPI_LUVA_ISOLANTE', 'EPI_OCULOS', 'EPI_AVENTAL'],
                successMessage: 'Muito bem! Você garantiu proteção química adequada.',
                failMessage: 'Sem respirador e avental, a exposição química é perigosa.',
                points: 190
            },
            {
                id: 'ELET_012',
                text: 'Troca de lâmpadas em poste de iluminação pública. Quais EPIs são obrigatórios?',
                correctEpis: ['EPI_CAPACETE_B', 'EPI_OCULOS', 'EPI_CINTO', 'EPI_BOTINA_ISOLANTE'],
                successMessage: 'Ótimo! Você se protegeu contra queda e objetos soltos.',
                failMessage: 'Nunca esqueça o cinto de segurança em altura!',
                points: 140
            },
                {
                id: 'ELET_013',
                text: 'Mistura de tintas e solventes em oficina. Quais EPIs devem ser usados?',
                correctEpis: ['EPI_RESPIRADOR', 'EPI_OCULOS', 'EPI_LUVA_ISOLANTE', 'EPI_MASCARA'],
                successMessage: 'Correto! Você se protegeu contra vapores e respingos químicos.',
                failMessage: 'Máscara e respirador são indispensáveis nesse tipo de atividade.',
                points: 150
            },

        ];
        
        // Funções do Jogo
        function startGame() {
            document.getElementById('menuScreen').style.display = 'none';
            document.getElementById('gameScreen').style.display = 'block';
            resetGame();
            loadChallenge();
        }
        
        function resetGame() {
            gameState = {
                lives: 5.,
                score: 0,
                level: 1,
                currentChallenge: 0,
                selectedEpis: []
            };
            updateStats();
        }
        
        function loadChallenge() {
            const challenge = challenges[gameState.currentChallenge % challenges.length];
            document.getElementById('challengeText').textContent = challenge.text;
            
            // Limpar seleção anterior
            gameState.selectedEpis = [];
            
            // Criar cards de EPI
            const epiContainer = document.getElementById('epiCards');
            epiContainer.innerHTML = '';
            
            // Embaralhar EPIs para mostrar
            const allEpiKeys = Object.keys(epis);
            const shuffled = allEpiKeys.sort(() => Math.random() - 0.5);
            
            shuffled.forEach(epiKey => {
                const epi = epis[epiKey];
                const card = document.createElement('div');
                card.className = 'epi-card';
                card.dataset.epiId = epiKey;
                card.innerHTML = `
                    <div class="epi-icon">${epi.icon}</div>
                    <div class="epi-name">${epi.name}</div>
                `;
                card.onclick = () => toggleEpi(epiKey);
                epiContainer.appendChild(card);
            });
        }
        
        function toggleEpi(epiId) {
            const card = document.querySelector(`[data-epi-id="${epiId}"]`);
            const index = gameState.selectedEpis.indexOf(epiId);
            
            if (index === -1) {
                gameState.selectedEpis.push(epiId);
                card.classList.add('selected');
            } else {
                gameState.selectedEpis.splice(index, 1);
                card.classList.remove('selected');
            }
            
            // Habilitar/desabilitar botão confirmar
            const confirmButton = document.getElementById('confirmButton');
            confirmButton.disabled = gameState.selectedEpis.length === 0;
        }
        
        function checkAnswer() {
            const challenge = challenges[gameState.currentChallenge % challenges.length];
            const correct = arraysEqual(gameState.selectedEpis.sort(), challenge.correctEpis.sort());
            
            if (correct) {
                showSuccess(challenge);
            } else {
                showFailure(challenge);
            }
        }
        
        function arraysEqual(a, b) {
            if (a.length !== b.length) return false;
            for (let i = 0; i < a.length; i++) {
                if (a[i] !== b[i]) return false;
            }
            return true;
        }
        
        function showSuccess(challenge) {
            gameState.score += challenge.points;
            updateStats();
            
            const overlay = document.getElementById('resultOverlay');
            const content = document.getElementById('resultContent');
            
            content.innerHTML = `
                <div class="success-animation">
                    <div class="success-worker">👷‍♂️👍</div>
                    <div class="success-text">SUCESSO!</div>
                    <div class="success-points">+${challenge.points} PONTOS</div>
                    <p style="color: #fff; font-size: 10px; margin: 20px 0; line-height: 1.6;">
                        ${challenge.successMessage}
                    </p>
                    <button class="continue-button" onclick="nextChallenge()">CONTINUAR</button>
                </div>
            `;
            
            overlay.classList.add('show');
            playSound('success');
        }
        
        function showFailure(challenge) {
            gameState.lives--;
            updateStats();
            
            const overlay = document.getElementById('resultOverlay');
            const content = document.getElementById('resultContent');
            
            // EPIs corretos para mostrar
            const correctEpisList = challenge.correctEpis.map(id => epis[id].name).join(', ');
            
            content.innerHTML = `
                <div class="fail-animation">
                    <div class="shocked-worker">
                        <span style="position: relative;">😵</span>
                        <span class="skeleton-flash">💀</span>
                        <span class="lightning-bolt" style="top: -30px; left: -40px;">⚡</span>
                        <span class="lightning-bolt" style="top: -30px; right: -40px;">⚡</span>
                    </div>
                    <div class="fail-text">CHOQUE!</div>
                    <div class="fail-explanation">
                        ${challenge.failMessage}<br><br>
                        EPIs corretos: ${correctEpisList}
                    </div>
                    <button class="continue-button" onclick="nextChallenge()">
                        ${gameState.lives > 0 ? 'TENTAR NOVAMENTE' : 'REINICIAR JOGO'}
                    </button>
                </div>
            `;
            
            overlay.classList.add('show');
            playSound('shock');
            
            if (gameState.lives === 0) {
                setTimeout(() => {
                    alert(`Game Over! Pontuação final: ${gameState.score}`);
                    showMenu();
                }, 2000);
            }
        }
        
        function nextChallenge() {
            document.getElementById('resultOverlay').classList.remove('show');
            
            if (gameState.lives > 0) {
                gameState.currentChallenge++;
                if (gameState.currentChallenge % 4 === 0) {
                    gameState.level++;
                    updateStats();
                }
                loadChallenge();
            } else {
                showMenu();
            }
        }
        
        function showMenu() {
            document.getElementById('menuScreen').style.display = 'block';
            document.getElementById('gameScreen').style.display = 'none';
            document.getElementById('resultOverlay').classList.remove('show');
        }
        
        function updateStats() {
            document.getElementById('lives').textContent = gameState.lives;
            document.getElementById('score').textContent = gameState.score;
            document.getElementById('level').textContent = gameState.level;
        }
        
        function showInstructions() {
            alert(`
INSTRUÇÕES DO JOGO:

1. Leia atentamente a situação apresentada
2. Selecione os EPIs necessários clicando nos cards
3. Clique em CONFIRMAR quando tiver certeza
4. Ganhe pontos por respostas corretas
5. Você tem 3 vidas - use com sabedoria!

DICA: Pense sempre na segurança primeiro!
            `);
        }
        
        function playSound(type) {
            // Simulação de sons com Web Audio API
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            if (type === 'success') {
                oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
                oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1); // E5
                oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2); // G5
                gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
            } else if (type === 'shock') {
                oscillator.type = 'sawtooth';
                oscillator.frequency.setValueAtTime(100, audioContext.currentTime);
                oscillator.frequency.exponentialRampToValueAtTime(20, audioContext.currentTime + 0.5);
                gainNode.gain.setValueAtTime(0.5, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
            }
            
            oscillator.start();
            oscillator.stop(audioContext.currentTime + 0.5);
        }
        
        // Inicialização
        document.addEventListener('DOMContentLoaded', function() {
            updateStats();
        });