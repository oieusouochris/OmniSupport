import React, { createContext, useEffect, useState, ReactNode } from 'react';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { auth, db } from '../../lib/firebase/client';
import { type AppUser } from '../../lib/definitions';
import { doc, getDoc } from 'firebase/firestore';

export interface AuthContextType {
    user: AppUser | null;
    loading: boolean;
}

export const AuthContext = createContext<AuthContextType>({
    user: null,
    loading: true,
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<AppUser | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser: User | null) => {
            if (firebaseUser) {
                const userDocRef = doc(db, 'users', firebaseUser.uid);
                const userDoc = await getDoc(userDocRef);
                const role = userDoc.exists() && userDoc.data()?.role ? userDoc.data()?.role : 'agent';

                // Cria um objeto AppUser simples e serializável a partir dos dados do Firebase e Firestore.
                // Isso desacopla o estado da aplicação do objeto complexo do Firebase User e resolve problemas de tipo.
                setUser({
                    uid: firebaseUser.uid,
                    email: firebaseUser.email,
                    displayName: firebaseUser.displayName,
                    photoURL: firebaseUser.photoURL,
                    role: role,
                });

            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
