import { createContext, useContext, useState, useEffect } from "react";

const MembershipContext = createContext();

export const MembershipProvider = ({ children }) => {
    const getInitialMembership = () => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("membership_type") || null;
        }
        return null;
    };

    const [membershipType, setMembershipType] = useState(getInitialMembership);

    // Sync updates to localStorage
    useEffect(() => {
        if (membershipType && typeof window !== "undefined") {
            localStorage.setItem("membership_type", membershipType);
        }
    }, [membershipType]);

    return (
        <MembershipContext.Provider
            value={{ membershipType, setMembershipType }}
        >
            {children}
        </MembershipContext.Provider>
    );
};

export const useMembership = () => useContext(MembershipContext);
