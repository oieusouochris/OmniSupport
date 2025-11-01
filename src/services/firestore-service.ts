import { db } from '../lib/firebase/client';
import { doc, getDoc, setDoc, updateDoc, collection, addDoc } from 'firebase/firestore';
import { type BaseAppUser } from '../lib/definitions';

/**
 * Busca um documento de usuário no Firestore pelo UID.
 * @param uid O UID do usuário.
 * @returns Os dados do usuário ou null se não encontrado.
 */
export const getUserFromFirestore = async (uid: string): Promise<BaseAppUser | null> => {
    const userDocRef = doc(db, 'users', uid);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
        return userDoc.data() as BaseAppUser;
    }
    return null;
};

/**
 * Cria ou atualiza um documento de usuário no Firestore.
 * @param user O objeto de usuário a ser salvo.
 */
export const setUserInFirestore = async (user: BaseAppUser): Promise<void> => {
    const userDocRef = doc(db, 'users', user.uid);
    await setDoc(userDocRef, user, { merge: true });
};

// Adicione aqui outras funções de serviço do Firestore conforme necessário.
// Ex: getTickets, createTicket, updateAuditItem, etc.
