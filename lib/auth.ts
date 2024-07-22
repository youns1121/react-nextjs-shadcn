const bcrypt = require('bcryptjs');

// 비밀번호 해싱 함수
export const hashPassword = async (password: string) => {
    const salt = await bcrypt.genSalt(10); // 솔트 생성
    return await bcrypt.hash(password, salt); // 비밀번호 해싱
};

// 비밀번호 검증 함수
export const comparePassword = async (password: string, hashedPassword: string) => {
    return await bcrypt.compare(password, hashedPassword); // 비밀번호 비교
};