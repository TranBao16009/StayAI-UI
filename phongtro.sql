--
-- PostgreSQL database dump
--

-- Dumped from database version 17.4
-- Dumped by pg_dump version 17.4

-- Started on 2025-04-05 14:06:32

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 4 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: pg_database_owner
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO pg_database_owner;

--
-- TOC entry 5010 (class 0 OID 0)
-- Dependencies: 4
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: pg_database_owner
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- TOC entry 949 (class 1247 OID 16562)
-- Name: enum_Payments_status; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public."enum_Payments_status" AS ENUM (
    'Thành công',
    'Đang chờ',
    'Đã hủy'
);


ALTER TYPE public."enum_Payments_status" OWNER TO postgres;

--
-- TOC entry 925 (class 1247 OID 16479)
-- Name: enum_Profiles_gender; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public."enum_Profiles_gender" AS ENUM (
    'Nam',
    'Nữ',
    'Khác'
);


ALTER TYPE public."enum_Profiles_gender" OWNER TO postgres;

--
-- TOC entry 931 (class 1247 OID 16497)
-- Name: enum_Rooms_position; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public."enum_Rooms_position" AS ENUM (
    'Đã thuê',
    'Còn trống',
    'Đang xử lý'
);


ALTER TYPE public."enum_Rooms_position" OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 247 (class 1259 OID 16427)
-- Name: Catalogs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Catalogs" (
    id integer NOT NULL,
    slug character varying(255) NOT NULL,
    value character varying(255) NOT NULL,
    text character varying(255),
    description text,
    "isDeleted" boolean DEFAULT false,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Catalogs" OWNER TO postgres;

--
-- TOC entry 246 (class 1259 OID 16426)
-- Name: Catalogs_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Catalogs_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Catalogs_id_seq" OWNER TO postgres;

--
-- TOC entry 5011 (class 0 OID 0)
-- Dependencies: 246
-- Name: Catalogs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Catalogs_id_seq" OWNED BY public."Catalogs".id;


--
-- TOC entry 251 (class 1259 OID 16451)
-- Name: Comments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Comments" (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    "postId" integer NOT NULL,
    content text NOT NULL,
    "parentComment" integer,
    "isDeleted" boolean DEFAULT false,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Comments" OWNER TO postgres;

--
-- TOC entry 250 (class 1259 OID 16450)
-- Name: Comments_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Comments_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Comments_id_seq" OWNER TO postgres;

--
-- TOC entry 5012 (class 0 OID 0)
-- Dependencies: 250
-- Name: Comments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Comments_id_seq" OWNED BY public."Comments".id;


--
-- TOC entry 261 (class 1259 OID 16524)
-- Name: Contracts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Contracts" (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    "roomId" integer NOT NULL,
    "expiredAt" timestamp with time zone NOT NULL,
    "preMoney" double precision NOT NULL,
    notes character varying(255),
    "stayNumber" integer NOT NULL,
    "isDeleted" boolean DEFAULT false,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Contracts" OWNER TO postgres;

--
-- TOC entry 260 (class 1259 OID 16523)
-- Name: Contracts_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Contracts_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Contracts_id_seq" OWNER TO postgres;

--
-- TOC entry 5013 (class 0 OID 0)
-- Dependencies: 260
-- Name: Contracts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Contracts_id_seq" OWNED BY public."Contracts".id;


--
-- TOC entry 263 (class 1259 OID 16532)
-- Name: Convenients; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Convenients" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    image character varying(255) NOT NULL,
    "isDeleted" boolean DEFAULT false,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Convenients" OWNER TO postgres;

--
-- TOC entry 262 (class 1259 OID 16531)
-- Name: Convenients_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Convenients_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Convenients_id_seq" OWNER TO postgres;

--
-- TOC entry 5014 (class 0 OID 0)
-- Dependencies: 262
-- Name: Convenients_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Convenients_id_seq" OWNED BY public."Convenients".id;


--
-- TOC entry 265 (class 1259 OID 16542)
-- Name: IndexCounters; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."IndexCounters" (
    id integer NOT NULL,
    "roomId" integer NOT NULL,
    electric double precision DEFAULT '0'::double precision NOT NULL,
    water double precision DEFAULT '0'::double precision NOT NULL,
    caps boolean DEFAULT false,
    internet boolean DEFAULT false,
    date timestamp with time zone NOT NULL,
    "isDeleted" boolean DEFAULT false,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "isPayment" boolean DEFAULT false NOT NULL
);


ALTER TABLE public."IndexCounters" OWNER TO postgres;

--
-- TOC entry 264 (class 1259 OID 16541)
-- Name: IndexCounters_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."IndexCounters_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."IndexCounters_id_seq" OWNER TO postgres;

--
-- TOC entry 5015 (class 0 OID 0)
-- Dependencies: 264
-- Name: IndexCounters_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."IndexCounters_id_seq" OWNED BY public."IndexCounters".id;


--
-- TOC entry 269 (class 1259 OID 16570)
-- Name: Payments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Payments" (
    id integer NOT NULL,
    "userId" integer,
    "roomId" integer,
    total integer,
    email character varying(255),
    status public."enum_Payments_status" DEFAULT 'Đang chờ'::public."enum_Payments_status",
    "isDeleted" boolean DEFAULT false,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Payments" OWNER TO postgres;

--
-- TOC entry 268 (class 1259 OID 16569)
-- Name: Payments_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Payments_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Payments_id_seq" OWNER TO postgres;

--
-- TOC entry 5016 (class 0 OID 0)
-- Dependencies: 268
-- Name: Payments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Payments_id_seq" OWNED BY public."Payments".id;


--
-- TOC entry 249 (class 1259 OID 16439)
-- Name: Posts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Posts" (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    star double precision DEFAULT '0'::double precision,
    address character varying(255) NOT NULL,
    "catalogId" integer NOT NULL,
    description text NOT NULL,
    "postedBy" integer NOT NULL,
    images text NOT NULL,
    views integer DEFAULT 0,
    "isDeleted" boolean DEFAULT false,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Posts" OWNER TO postgres;

--
-- TOC entry 248 (class 1259 OID 16438)
-- Name: Posts_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Posts_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Posts_id_seq" OWNER TO postgres;

--
-- TOC entry 5017 (class 0 OID 0)
-- Dependencies: 248
-- Name: Posts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Posts_id_seq" OWNED BY public."Posts".id;


--
-- TOC entry 257 (class 1259 OID 16486)
-- Name: Profiles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Profiles" (
    id integer NOT NULL,
    "firstName" character varying(255),
    "lastName" character varying(255),
    email character varying(255),
    birthday timestamp with time zone,
    "CID" character varying(255),
    address character varying(255),
    gender public."enum_Profiles_gender" DEFAULT 'Khác'::public."enum_Profiles_gender",
    image character varying(255),
    "userId" integer NOT NULL,
    "isDeleted" boolean DEFAULT false,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Profiles" OWNER TO postgres;

--
-- TOC entry 256 (class 1259 OID 16485)
-- Name: Profiles_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Profiles_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Profiles_id_seq" OWNER TO postgres;

--
-- TOC entry 5018 (class 0 OID 0)
-- Dependencies: 256
-- Name: Profiles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Profiles_id_seq" OWNED BY public."Profiles".id;


--
-- TOC entry 253 (class 1259 OID 16461)
-- Name: Ratings; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Ratings" (
    id integer NOT NULL,
    "postId" integer NOT NULL,
    content text,
    score double precision NOT NULL,
    "userId" integer NOT NULL,
    "isDeleted" boolean DEFAULT false,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Ratings" OWNER TO postgres;

--
-- TOC entry 252 (class 1259 OID 16460)
-- Name: Ratings_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Ratings_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Ratings_id_seq" OWNER TO postgres;

--
-- TOC entry 5019 (class 0 OID 0)
-- Dependencies: 252
-- Name: Ratings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Ratings_id_seq" OWNED BY public."Ratings".id;


--
-- TOC entry 245 (class 1259 OID 16419)
-- Name: Role_Users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Role_Users" (
    id integer NOT NULL,
    "userId" integer,
    "roleCode" character varying(255),
    "isDeleted" boolean DEFAULT false,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Role_Users" OWNER TO postgres;

--
-- TOC entry 244 (class 1259 OID 16418)
-- Name: Role_Users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Role_Users_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Role_Users_id_seq" OWNER TO postgres;

--
-- TOC entry 5020 (class 0 OID 0)
-- Dependencies: 244
-- Name: Role_Users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Role_Users_id_seq" OWNED BY public."Role_Users".id;


--
-- TOC entry 243 (class 1259 OID 16405)
-- Name: Roles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Roles" (
    id integer NOT NULL,
    code character varying(255) NOT NULL,
    value character varying(255) NOT NULL,
    "isDeleted" boolean DEFAULT false,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Roles" OWNER TO postgres;

--
-- TOC entry 242 (class 1259 OID 16404)
-- Name: Roles_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Roles_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Roles_id_seq" OWNER TO postgres;

--
-- TOC entry 5021 (class 0 OID 0)
-- Dependencies: 242
-- Name: Roles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Roles_id_seq" OWNED BY public."Roles".id;


--
-- TOC entry 267 (class 1259 OID 16554)
-- Name: Room_Convenients; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Room_Convenients" (
    id integer NOT NULL,
    "roomId" integer,
    "convenientId" integer,
    "isDeleted" boolean DEFAULT false,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Room_Convenients" OWNER TO postgres;

--
-- TOC entry 266 (class 1259 OID 16553)
-- Name: Room_Convenients_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Room_Convenients_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Room_Convenients_id_seq" OWNER TO postgres;

--
-- TOC entry 5022 (class 0 OID 0)
-- Dependencies: 266
-- Name: Room_Convenients_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Room_Convenients_id_seq" OWNED BY public."Room_Convenients".id;


--
-- TOC entry 259 (class 1259 OID 16504)
-- Name: Rooms; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Rooms" (
    id integer NOT NULL,
    "postId" integer NOT NULL,
    title character varying(255) NOT NULL,
    price double precision NOT NULL,
    area double precision NOT NULL,
    "stayMax" integer NOT NULL,
    "position" public."enum_Rooms_position" DEFAULT 'Còn trống'::public."enum_Rooms_position",
    "electricPrice" character varying(255) DEFAULT 0,
    "waterPrice" character varying(255) DEFAULT 0,
    "capsPrice" character varying(255) DEFAULT 0,
    "internetPrice" character varying(255) DEFAULT 0,
    "isDeleted" boolean DEFAULT false,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Rooms" OWNER TO postgres;

--
-- TOC entry 258 (class 1259 OID 16503)
-- Name: Rooms_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Rooms_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Rooms_id_seq" OWNER TO postgres;

--
-- TOC entry 5023 (class 0 OID 0)
-- Dependencies: 258
-- Name: Rooms_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Rooms_id_seq" OWNED BY public."Rooms".id;


--
-- TOC entry 239 (class 1259 OID 16389)
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO postgres;

--
-- TOC entry 241 (class 1259 OID 16395)
-- Name: Users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Users" (
    id integer NOT NULL,
    username character varying(255) NOT NULL,
    phone character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    "resetTokenPassword" character varying(255),
    "resetTokenExpire" timestamp with time zone,
    "isDeleted" boolean DEFAULT false,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Users" OWNER TO postgres;

--
-- TOC entry 240 (class 1259 OID 16394)
-- Name: Users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Users_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Users_id_seq" OWNER TO postgres;

--
-- TOC entry 5024 (class 0 OID 0)
-- Dependencies: 240
-- Name: Users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Users_id_seq" OWNED BY public."Users".id;


--
-- TOC entry 255 (class 1259 OID 16471)
-- Name: Wishlists; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Wishlists" (
    id integer NOT NULL,
    "postId" integer NOT NULL,
    "userId" integer NOT NULL,
    "isDeleted" boolean DEFAULT false,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Wishlists" OWNER TO postgres;

--
-- TOC entry 254 (class 1259 OID 16470)
-- Name: Wishlists_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Wishlists_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Wishlists_id_seq" OWNER TO postgres;

--
-- TOC entry 5025 (class 0 OID 0)
-- Dependencies: 254
-- Name: Wishlists_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Wishlists_id_seq" OWNED BY public."Wishlists".id;


--
-- TOC entry 4752 (class 2604 OID 16430)
-- Name: Catalogs id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Catalogs" ALTER COLUMN id SET DEFAULT nextval('public."Catalogs_id_seq"'::regclass);


--
-- TOC entry 4758 (class 2604 OID 16454)
-- Name: Comments id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Comments" ALTER COLUMN id SET DEFAULT nextval('public."Comments_id_seq"'::regclass);


--
-- TOC entry 4774 (class 2604 OID 16527)
-- Name: Contracts id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Contracts" ALTER COLUMN id SET DEFAULT nextval('public."Contracts_id_seq"'::regclass);


--
-- TOC entry 4776 (class 2604 OID 16535)
-- Name: Convenients id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Convenients" ALTER COLUMN id SET DEFAULT nextval('public."Convenients_id_seq"'::regclass);


--
-- TOC entry 4778 (class 2604 OID 16545)
-- Name: IndexCounters id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."IndexCounters" ALTER COLUMN id SET DEFAULT nextval('public."IndexCounters_id_seq"'::regclass);


--
-- TOC entry 4787 (class 2604 OID 16573)
-- Name: Payments id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Payments" ALTER COLUMN id SET DEFAULT nextval('public."Payments_id_seq"'::regclass);


--
-- TOC entry 4754 (class 2604 OID 16442)
-- Name: Posts id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Posts" ALTER COLUMN id SET DEFAULT nextval('public."Posts_id_seq"'::regclass);


--
-- TOC entry 4764 (class 2604 OID 16489)
-- Name: Profiles id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Profiles" ALTER COLUMN id SET DEFAULT nextval('public."Profiles_id_seq"'::regclass);


--
-- TOC entry 4760 (class 2604 OID 16464)
-- Name: Ratings id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Ratings" ALTER COLUMN id SET DEFAULT nextval('public."Ratings_id_seq"'::regclass);


--
-- TOC entry 4750 (class 2604 OID 16422)
-- Name: Role_Users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Role_Users" ALTER COLUMN id SET DEFAULT nextval('public."Role_Users_id_seq"'::regclass);


--
-- TOC entry 4748 (class 2604 OID 16408)
-- Name: Roles id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Roles" ALTER COLUMN id SET DEFAULT nextval('public."Roles_id_seq"'::regclass);


--
-- TOC entry 4785 (class 2604 OID 16557)
-- Name: Room_Convenients id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Room_Convenients" ALTER COLUMN id SET DEFAULT nextval('public."Room_Convenients_id_seq"'::regclass);


--
-- TOC entry 4767 (class 2604 OID 16507)
-- Name: Rooms id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Rooms" ALTER COLUMN id SET DEFAULT nextval('public."Rooms_id_seq"'::regclass);


--
-- TOC entry 4746 (class 2604 OID 16398)
-- Name: Users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users" ALTER COLUMN id SET DEFAULT nextval('public."Users_id_seq"'::regclass);


--
-- TOC entry 4762 (class 2604 OID 16474)
-- Name: Wishlists id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Wishlists" ALTER COLUMN id SET DEFAULT nextval('public."Wishlists_id_seq"'::regclass);


--
-- TOC entry 4982 (class 0 OID 16427)
-- Dependencies: 247
-- Data for Name: Catalogs; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Catalogs" VALUES (1, 'trang-chu', 'Trang chủ', 'Tìm kiếm chỗ thuê ưng ý', 'Kênh thông tin Phòng trọ số 1 Việt Nam - Website đăng tin cho thuê phòng trọ, nhà nguyên căn, căn hộ, ở ghép nhanh, hiệu quả với 100.000+ tin đăng và 2.500.000 lượt xem mỗi tháng.', false, '2024-09-24 00:21:31.55+07', '2024-09-24 00:21:31.55+07');
INSERT INTO public."Catalogs" VALUES (2, 'cho-thue-phong-tro', 'Cho thuê phòng trọ', 'Tho Thuê Phòng Trọ, Giá Rẻ, Tiện Nghi, Mới Nhất', 'Kênh thông tin Phòng trọ số 1 Việt Nam - Website đăng tin cho thuê phòng trọ, nhà nguyên căn, căn hộ, ở ghép nhanh, hiệu quả với 100.000+ tin đăng và 2.500.000 lượt xem mỗi tháng.', false, '2024-09-24 00:21:31.55+07', '2024-09-24 00:21:31.55+07');
INSERT INTO public."Catalogs" VALUES (3, 'cho-thue-can-ho', 'Cho thuê căn hộ', 'Cho Thuê Căn Hộ Chung Cư, Giá Rẻ, View Đẹp, Mới Nhất', 'Cho thuê căn hộ - Kênh đăng tin cho thuê căn hộ số 1: giá rẻ, chính chủ, đầy đủ tiện nghi. Cho thuê chung cư với nhiều mức giá, diện tích cho thuê khác nhau.', false, '2024-09-24 00:21:31.55+07', '2024-09-24 00:21:31.55+07');


--
-- TOC entry 4986 (class 0 OID 16451)
-- Dependencies: 251
-- Data for Name: Comments; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 4996 (class 0 OID 16524)
-- Dependencies: 261
-- Data for Name: Contracts; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Contracts" VALUES (6, 14, 41, '2025-05-03 03:06:33.459+07', 0, 'Payment from hovinh414@gmail.com', 1, false, '2025-04-03 03:06:33.46+07', '2025-04-03 03:06:33.46+07');
INSERT INTO public."Contracts" VALUES (7, 15, 56, '2025-05-03 23:43:54.725+07', 0, 'Payment from nguyenvanc@gmail.com', 1, false, '2025-04-03 23:43:54.726+07', '2025-04-03 23:43:54.726+07');
INSERT INTO public."Contracts" VALUES (8, 15, 43, '2025-05-05 13:40:20.627+07', 0, 'Payment from nguyenvanc@gmail.com', 1, false, '2025-04-05 13:40:20.629+07', '2025-04-05 13:40:20.629+07');
INSERT INTO public."Contracts" VALUES (9, 15, 47, '2025-05-05 13:48:17.078+07', 0, 'Payment from nguyenvanc@gmail.com', 1, false, '2025-04-05 13:48:17.079+07', '2025-04-05 13:48:17.079+07');


--
-- TOC entry 4998 (class 0 OID 16532)
-- Dependencies: 263
-- Data for Name: Convenients; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Convenients" VALUES (1, 'Wifi miễn phí', '/convenients/wifi.svg', false, '2024-09-24 00:21:31.55+07', '2024-09-24 00:21:31.55+07');
INSERT INTO public."Convenients" VALUES (2, 'Chỗ đỗ xe miễn phí', '/convenients/parkcar.svg', false, '2024-09-24 00:21:31.55+07', '2024-09-24 00:21:31.55+07');
INSERT INTO public."Convenients" VALUES (3, 'Có máy giặt chung', '/convenients/washing.svg', false, '2024-09-24 00:21:31.55+07', '2024-09-24 00:21:31.55+07');
INSERT INTO public."Convenients" VALUES (4, 'Điều hòa nhiệt độ', '/convenients/conditioner.svg', false, '2024-09-24 00:21:31.55+07', '2024-09-24 00:21:31.55+07');


--
-- TOC entry 5000 (class 0 OID 16542)
-- Dependencies: 265
-- Data for Name: IndexCounters; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."IndexCounters" VALUES (1, 41, 100, 5, true, true, '2025-04-03 07:00:00+07', false, '2025-04-03 04:00:56.613+07', '2025-04-03 04:02:15.57+07', true);
INSERT INTO public."IndexCounters" VALUES (2, 56, 300, 10, false, false, '2025-04-30 07:00:00+07', false, '2025-04-03 23:46:00.546+07', '2025-04-03 23:47:18.724+07', true);
INSERT INTO public."IndexCounters" VALUES (3, 56, 100, 10, false, false, '2025-04-03 07:00:00+07', false, '2025-04-03 23:46:15.153+07', '2025-04-04 06:20:43.47+07', true);
INSERT INTO public."IndexCounters" VALUES (4, 56, 150, 15, true, true, '2025-04-10 07:00:00+07', false, '2025-04-04 06:33:01.805+07', '2025-04-04 06:58:29.014+07', true);
INSERT INTO public."IndexCounters" VALUES (5, 56, 200, 20, true, true, '2025-04-25 07:00:00+07', false, '2025-04-04 07:19:22.707+07', '2025-04-04 07:20:34.911+07', true);
INSERT INTO public."IndexCounters" VALUES (6, 56, 250, 25, true, true, '2025-04-21 07:00:00+07', false, '2025-04-05 13:42:25.265+07', '2025-04-05 13:43:14.254+07', true);


--
-- TOC entry 5004 (class 0 OID 16570)
-- Dependencies: 269
-- Data for Name: Payments; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Payments" VALUES (1, 11, 6, 3134000, 'hovinh414@gmail.com', 'Đang chờ', false, '2024-09-24 00:28:59.663+07', '2024-09-24 00:28:59.663+07');
INSERT INTO public."Payments" VALUES (2, 11, 29, 506000, 'hovinh414@gmail.com', 'Đang chờ', false, '2024-10-11 04:55:36.721+07', '2024-10-11 04:55:36.721+07');
INSERT INTO public."Payments" VALUES (3, 11, 15, 66754000, 'hovinh414@gmail.com', 'Đang chờ', false, '2024-10-11 04:56:57.847+07', '2024-10-11 04:56:57.847+07');
INSERT INTO public."Payments" VALUES (6, 13, 22, 44785000, 'hovinh414@gmail.com', 'Đang chờ', false, '2024-10-11 05:08:25.841+07', '2024-10-11 05:08:25.841+07');
INSERT INTO public."Payments" VALUES (4, 13, 35, 85276000, 'hovinh414@gmail.com', 'Thành công', false, '2024-10-11 05:02:27.103+07', '2024-10-11 05:09:41.725+07');
INSERT INTO public."Payments" VALUES (5, 13, 40, 564000, 'hovinh414@gmail.com', 'Thành công', false, '2024-10-11 05:07:17.89+07', '2024-10-11 05:09:45.661+07');
INSERT INTO public."Payments" VALUES (7, 14, 41, 3200000, 'hovinh414@gmail.com', 'Thành công', false, '2025-04-03 03:06:33.46+07', '2025-04-03 03:07:41.632+07');
INSERT INTO public."Payments" VALUES (8, 14, 41, 600000, NULL, 'Thành công', false, '2025-04-03 04:02:15.578+07', '2025-04-03 04:02:15.578+07');
INSERT INTO public."Payments" VALUES (9, 15, 56, 4500000, 'nguyenvanc@gmail.com', 'Thành công', false, '2025-04-03 23:43:54.725+07', '2025-04-03 23:45:05.173+07');
INSERT INTO public."Payments" VALUES (10, 15, 56, 1550000, NULL, 'Thành công', false, '2025-04-03 23:47:18.727+07', '2025-04-03 23:47:18.727+07');
INSERT INTO public."Payments" VALUES (11, 15, 56, 650000, NULL, 'Thành công', false, '2025-04-04 06:20:43.481+07', '2025-04-04 06:20:43.481+07');
INSERT INTO public."Payments" VALUES (12, NULL, 975000, 97500000, NULL, 'Thành công', false, '2025-04-04 06:50:14.882+07', '2025-04-04 06:50:14.882+07');
INSERT INTO public."Payments" VALUES (13, NULL, 975000, 97500000, NULL, 'Thành công', false, '2025-04-04 06:50:17.776+07', '2025-04-04 06:50:17.776+07');
INSERT INTO public."Payments" VALUES (14, NULL, 975000, 97500000, NULL, 'Thành công', false, '2025-04-04 06:50:19.913+07', '2025-04-04 06:50:19.913+07');
INSERT INTO public."Payments" VALUES (15, NULL, 975000, 97500000, NULL, 'Thành công', false, '2025-04-04 06:50:50.777+07', '2025-04-04 06:50:50.777+07');
INSERT INTO public."Payments" VALUES (16, NULL, 56, 97500000, NULL, 'Thành công', false, '2025-04-04 06:53:07.721+07', '2025-04-04 06:53:07.721+07');
INSERT INTO public."Payments" VALUES (17, NULL, 56, 97500000, NULL, 'Thành công', false, '2025-04-04 06:54:12.216+07', '2025-04-04 06:54:12.216+07');
INSERT INTO public."Payments" VALUES (18, NULL, 56, 97500000, NULL, 'Thành công', false, '2025-04-04 06:54:35.193+07', '2025-04-04 06:54:35.193+07');
INSERT INTO public."Payments" VALUES (19, NULL, 56, 97500000, NULL, 'Thành công', false, '2025-04-04 06:54:55.314+07', '2025-04-04 06:54:55.314+07');
INSERT INTO public."Payments" VALUES (20, NULL, 56, NULL, NULL, 'Thành công', false, '2025-04-04 06:57:37.825+07', '2025-04-04 06:57:37.825+07');
INSERT INTO public."Payments" VALUES (21, NULL, 56, 97500000, NULL, 'Thành công', false, '2025-04-04 06:58:29.017+07', '2025-04-04 06:58:29.017+07');
INSERT INTO public."Payments" VALUES (22, NULL, 56, 130000000, NULL, 'Thành công', false, '2025-04-04 07:20:34.914+07', '2025-04-04 07:20:34.914+07');
INSERT INTO public."Payments" VALUES (55, 15, 43, 4500000, 'nguyenvanc@gmail.com', 'Đang chờ', false, '2025-04-05 13:40:20.628+07', '2025-04-05 13:40:20.628+07');
INSERT INTO public."Payments" VALUES (56, NULL, 56, 162500000, NULL, 'Thành công', false, '2025-04-05 13:43:14.257+07', '2025-04-05 13:43:14.257+07');
INSERT INTO public."Payments" VALUES (57, 15, 47, 5000000, 'nguyenvanc@gmail.com', 'Đang chờ', false, '2025-04-05 13:48:17.078+07', '2025-04-05 13:48:17.078+07');


--
-- TOC entry 4984 (class 0 OID 16439)
-- Dependencies: 249
-- Data for Name: Posts; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Posts" VALUES (22, 'Phòng mới full nội thất ban công cửa sổ trời giáp Quận 5', 0, 'Đường Cây Sung, Phường 14, Quận 8, Tp Hồ Chí Minh', 2, '<div class="a1b2hkis">
<div class="cd9gm5n">
<h1>Ph&ograve;ng mới full nội thất ban c&ocirc;ng cửa sổ trời gi&aacute;p Quận 5</h1>
<div class="i1qen30x r9vw5if"><span class="bwq0cbs">Nội thất đầy đủ</span></div>
<div class="plmkxo3">
<div class="r9vw5if">
<div class="slhwvq6 r9vw5if"><strong class="pyhk1dv">3,9 triệu/th&aacute;ng</strong>&bull;<span class="brnpcl3"><strong>20 m&sup2;</strong></span></div>
</div>
</div>
<div class="r9vw5if">
<div class="sf0dbrp r9vw5if">&nbsp;<span class="bwq0cbs flex-1">Đường C&acirc;y Sung, Phường 14, Quận 8, Tp Hồ Ch&iacute; Minh</span></div>
<div class="r9vw5if">&nbsp;<span class="bwq0cbs">Cập nhật 2 ng&agrave;y trước</span></div>
</div>
</div>
</div>
<div class="a1b2hkis">
<div class="a13uoc2z">
<div class="col-xs-6 abzctes" data-testid="param-item">
<div class="a4ep88f">Diện t&iacute;ch</div>
<strong class="a3jfi3v">20 m&sup2;</strong></div>
<div class="col-xs-6 abzctes" data-testid="param-item">
<div class="a4ep88f">T&igrave;nh trạng nội thất</div>
<strong class="a3jfi3v">Nội thất đầy đủ</strong></div>
<div class="col-xs-6 abzctes" data-testid="param-item">
<div class="a4ep88f">Số tiền cọc</div>
<strong class="a3jfi3v">3.900.000 đ/th&aacute;ng</strong></div>
</div>
</div>
<div class="a1b2hkis">
<div class="d-lg-block styles_adBodyCollapse__1Xvk7">
<div class="styles_adBodyTitle__JrqDu">M&ocirc; tả chi tiết</div>
<div>
<p class="styles_adBody__vGW74">Địa chỉ: 7e/8 C&acirc;y Sung P14 Q8 Nội thất: Full y h&igrave;nh mới Ph&ograve;ng mới x&acirc;y sạch sẻ c&oacute; hầm xe si&ecirc;u rộng tho&aacute;ng miễn ph&iacute; Dv: 150k/p, nước 100, điện 3k8 Call xem ph&ograve;ng ngay ạ</p>
</div>
</div>
</div>', 11, '["https://res.cloudinary.com/dm73atrbj/image/upload/v1743622017/ugnscyxxb07inlex2drw.jpg","https://res.cloudinary.com/dm73atrbj/image/upload/v1743622018/upcdzlijkdjleevu4gur.jpg","https://res.cloudinary.com/dm73atrbj/image/upload/v1743622019/xjw7ew389fooworuknyo.jpg","https://res.cloudinary.com/dm73atrbj/image/upload/v1743622020/z45jxpcvmuzluhzrf4w7.jpg","https://res.cloudinary.com/dm73atrbj/image/upload/v1743622021/c7wzy9kg9ysiinpnlehe.jpg"]', 5, false, '2025-04-03 02:27:05.476+07', '2025-04-05 13:46:37.118+07');
INSERT INTO public."Posts" VALUES (24, 'Studio rộng 30m3 ngay vòng xoay Lăng Cha Cả, Công Viên Hoàng Văn Thụ', 0, 'Đường Giải Phóng, Phường 4, Quận Tân Bình, Tp Hồ Chí Minh', 2, '<div class="a1b2hkis">
<div class="cd9gm5n">
<h1>Studio rộng 30m3 ngay v&ograve;ng xoay Lăng Cha Cả, C&ocirc;ng Vi&ecirc;n Ho&agrave;ng Văn Thụ</h1>
<div class="i1qen30x r9vw5if"><span class="bwq0cbs">Nội thất đầy đủ</span></div>
<div class="plmkxo3">
<div class="r9vw5if">
<div class="slhwvq6 r9vw5if"><strong class="pyhk1dv">4,5 triệu/th&aacute;ng</strong>&bull;<span class="brnpcl3"><strong>30 m&sup2;</strong></span></div>
</div>
</div>
<div class="r9vw5if">
<div class="sf0dbrp r9vw5if">&nbsp;<span class="bwq0cbs flex-1">Đường Giải Ph&oacute;ng, Phường 4, Quận T&acirc;n B&igrave;nh, Tp Hồ Ch&iacute; Minh</span></div>
<div class="r9vw5if">&nbsp;<span class="bwq0cbs">Cập nhật 17 ph&uacute;t trước</span></div>
</div>
</div>
</div>
<div class="a1b2hkis">
<div class="a13uoc2z">
<div class="col-xs-6 abzctes" data-testid="param-item">
<div class="a4ep88f">Diện t&iacute;ch</div>
<strong class="a3jfi3v">30 m&sup2;</strong></div>
<div class="col-xs-6 abzctes" data-testid="param-item">
<div class="a4ep88f">T&igrave;nh trạng nội thất</div>
<strong class="a3jfi3v">Nội thất đầy đủ</strong></div>
</div>
</div>
<div class="a1b2hkis">
<div class="d-lg-block styles_adBodyCollapse__1Xvk7">
<div class="styles_adBodyTitle__JrqDu">M&ocirc; tả chi tiết</div>
<div>
<p class="styles_adBody__vGW74">Studio rộng 30m3 ngay v&ograve;ng xoay Lăng Cha Cả, C&ocirc;ng Vi&ecirc;n Ho&agrave;ng Văn Thụ Vị tr&iacute;: Giải Ph&oacute;ng, P4, Quận T&acirc;n B&igrave;nh - Điện 4.000/kwh - Nước 100.000/người - Wifi + R&aacute;c: 130.000/ph&ograve;ng</p>
</div>
</div>
</div>', 11, '["https://res.cloudinary.com/dm73atrbj/image/upload/v1743622514/upcg3fozu2lgkzzjarcv.jpg","https://res.cloudinary.com/dm73atrbj/image/upload/v1743622515/dnnoszsfsrkmskryq95o.jpg","https://res.cloudinary.com/dm73atrbj/image/upload/v1743622516/svdgp3blyqrq9ddysjfx.jpg","https://res.cloudinary.com/dm73atrbj/image/upload/v1743622517/dblxbuwhtbmu1qlxmchb.jpg"]', 2, false, '2025-04-03 02:35:19.989+07', '2025-04-03 03:09:38.306+07');
INSERT INTO public."Posts" VALUES (26, 'GIỎ HÀNG CHO THUÊ GIÁ TỐT CÁC CĂN STUDIO,1PN, 2PN, 3PN GIÁ CHỈ TỪ 4TR5', 0, 'Nguyễn Xiển, Phường Long Thạnh Mỹ (Quận 9 cũ), Thành phố Thủ Đức, Tp Hồ Chí Minh', 3, '<div class="a1b2hkis">
<div class="cd9gm5n">
<h1>GIỎ H&Agrave;NG CHO THU&Ecirc; GI&Aacute; TỐT C&Aacute;C CĂN STUDIO,1PN, 2PN, 3PN GI&Aacute; CHỈ TỪ 4TR5</h1>
<div class="i1qen30x r9vw5if"><span class="bwq0cbs">2 PN</span>&nbsp;&bull;&nbsp;<span class="bwq0cbs">Hướng Đ&ocirc;ng Bắc</span>&nbsp;&bull;&nbsp;<span class="bwq0cbs">Chung cư</span></div>
<div class="plmkxo3">
<div class="r9vw5if">
<div class="slhwvq6 r9vw5if"><strong class="pyhk1dv">4,5 triệu/th&aacute;ng</strong>&bull;<span class="brnpcl3"><strong>80 m&sup2;</strong></span></div>
</div>
</div>
<div class="r9vw5if">
<div class="sf0dbrp r9vw5if">&nbsp;<span class="bwq0cbs flex-1">Nguyễn Xiển, Phường Long Thạnh Mỹ (Quận 9 cũ), Th&agrave;nh phố Thủ Đức, Tp Hồ Ch&iacute; Minh</span></div>
<div class="AdParam_ptyAdParamItem__sW0ON">
<div class="AdParam_adMediaParam__3epxo">&nbsp;
<div class="media-body media-middle">Dự &Aacute;n:&nbsp;<span class="AdParam_adParamValue__IfaYa"><a tabindex="0" role="button" href="https://www.nhatot.com/du-an-vinhomes-grand-park-thanh-pho-thu-duc-pj2064367520">Vinhomes Grand Park</a></span></div>
</div>
</div>
<div class="r9vw5if">&nbsp;<span class="bwq0cbs">Cập nhật 17 giờ trước</span></div>
</div>
</div>
</div>
<div class="a1b2hkis">
<div class="a13uoc2z">
<div class="col-xs-6 abzctes" data-testid="param-item">
<div class="a4ep88f">Loại h&igrave;nh căn hộ</div>
<strong class="a3jfi3v">Chung cư</strong></div>
<div class="col-xs-6 abzctes" data-testid="param-item">
<div class="a4ep88f">Diện t&iacute;ch</div>
<strong class="a3jfi3v">80 m&sup2;</strong></div>
<div class="col-xs-6 abzctes" data-testid="param-item">
<div class="a4ep88f">Giấy tờ ph&aacute;p l&yacute;</div>
<strong class="a3jfi3v">Đang chờ sổ</strong></div>
<div class="col-xs-6 abzctes" data-testid="param-item">
<div class="a4ep88f">Số ph&ograve;ng ngủ</div>
<strong class="a3jfi3v">2 ph&ograve;ng</strong></div>
<div class="col-xs-6 abzctes" data-testid="param-item">
<div class="a4ep88f">Số ph&ograve;ng vệ sinh</div>
<strong class="a3jfi3v">2 ph&ograve;ng</strong></div>
<div class="col-xs-6 abzctes" data-testid="param-item">
<div class="a4ep88f">T&igrave;nh trạng nội thất</div>
<strong class="a3jfi3v">Nội thất cao cấp</strong></div>
</div>
</div>
<div class="a1b2hkis">
<div class="d-lg-block styles_adBodyCollapse__1Xvk7">
<div class="styles_adBodyTitle__JrqDu">M&ocirc; tả chi tiết</div>
<div>
<p class="styles_adBody__vGW74">Dịch vụ - uy t&iacute;n - tận t&acirc;m - tận t&igrave;nh - tận tụy phục vụ qu&yacute; kh&aacute;ch h&agrave;ng. PKD ch&uacute;ng t&ocirc;i h&acirc;n hạnh phục vụ qu&yacute; kh&aacute;ch h&agrave;ng. Full giỏ h&agrave;ng gi&aacute; *** thị trường cho thu&ecirc; Vinhomes Grand Park Q9. Tư vấn v&agrave; xem nh&agrave; 24/24 miễn ph&iacute;. Full căn hộ Vinhomes Q9 cho thu&ecirc; gi&aacute; *** thị trường. 1. Căn Studio. - Trống: 4.o00.000 VND - 4.500.000 VND. - Bếp + R&egrave;m: 4.800.000 VND - 5.000.000 VND. - Full nội thất: 5.500.000 VND - 6.500.000 VND. 2. Căn 1 ph&ograve;ng ngủ. - Trống: 4.800.000 VND - 5.000.000 VND. - Bếp + R&egrave;m: 5.500.000 VND - 6.000.000 VND. - Full: 6.000.000 VND - 7.500.000 VND. 3. Căn 2 ph&ograve;ng ngủ. + Căn 2 ph&ograve;ng ngủ 1 WC. - Trống: 5.300.000 VND - 5.500.000 VND. - Bếp + R&egrave;m: 6.000.000 VND - 6.500.000 VND. - Full: 7.000.000 VND - 8.000.000 VND. + Căn 2 Ph&ograve;ng Ngủ 2 WC. - Trống: 5.500.000 VND - 6.000.000 VND. - Bếp + R&egrave;m: 6.200.000 VND - 7.000.000 VND. - Full: 7.500.000 VND - 10.000.000 VND. 4. Căn 3 ph&ograve;ng ngủ. - Trống: 7.500.000 VND - 8.500.000 VND. - Bếp R&egrave;m: 8.000.000 VND - 9.000.000 VND. - Full: 10.000.000 VND - 15.000.000 VND. 5. Penthouse gồm 2 v&agrave; 3 ph&ograve;ng ngủ c&oacute; s&acirc;n vườn trống v&agrave; full nội thất cao cấp từ 7.000.000 VND. 6. Biệt thự: + Trống v&agrave; full nội thất cao cấp từ 15 triệu. + Mặt bằng trệt gi&aacute; trống v&agrave; full nội thất từ 6 triệu. + Mặt bằng tầng trống v&agrave; full nội thất từ 5 triệu. - Shophouse khối đế trống v&agrave; full nội thất từ 8 triệu Ph&iacute; quản l&yacute; cư d&acirc;n 8.800 đồng/m Ph&iacute; xe m&aacute;y 150.000 đồng/ th&aacute;ng Ph&iacute; gửi xe &ocirc;t&ocirc; 1.250.000 đồng/ th&aacute;ng Xe bu&yacute;t điện nội khu miễn ph&iacute; 5 ph&uacute;t một chuyến</p>
</div>
</div>
</div>', 11, '["https://res.cloudinary.com/dm73atrbj/image/upload/v1743623278/gotioduwetzk78q2nxdd.jpg","https://res.cloudinary.com/dm73atrbj/image/upload/v1743623280/bmna24ytm4rkobntczxs.jpg","https://res.cloudinary.com/dm73atrbj/image/upload/v1743623281/hcsnthloall2to8xnb1h.jpg","https://res.cloudinary.com/dm73atrbj/image/upload/v1743623282/wfypjypg7lkwxrcfp7xi.jpg","https://res.cloudinary.com/dm73atrbj/image/upload/v1743623284/omtgxgnhuzte5cnz81pr.jpg","https://res.cloudinary.com/dm73atrbj/image/upload/v1743623285/otz9c1ufhwcjblqwcmom.jpg"]', 3, false, '2025-04-03 02:48:14.61+07', '2025-04-03 03:09:40.474+07');
INSERT INTO public."Posts" VALUES (23, 'PHÒNG TRỌ CHO THUÊ GẦN NGÃ TƯ THỦ ĐỨC', 0, '58/2C, Đường Trương Văn Thành, Phường Hiệp Phú (Quận 9 cũ), Thành phố Thủ Đức, Tp Hồ Chí Minh', 2, '<div class="a1b2hkis">
<div class="cd9gm5n">
<h1>PH&Ograve;NG TRỌ CHO THU&Ecirc; GẦN NG&Atilde; TƯ THỦ ĐỨC</h1>
<div class="plmkxo3">
<div class="r9vw5if">
<div class="slhwvq6 r9vw5if"><strong class="pyhk1dv">2,7 triệu/th&aacute;ng</strong>&bull;<span class="brnpcl3"><strong>17 m&sup2;</strong></span></div>
</div>
</div>
<div class="r9vw5if">
<div class="sf0dbrp r9vw5if">&nbsp;<span class="bwq0cbs flex-1">58/2C, Đường Trương Văn Th&agrave;nh, Phường Hiệp Ph&uacute; (Quận 9 cũ), Th&agrave;nh phố Thủ Đức, Tp Hồ Ch&iacute; Minh</span></div>
<div class="r9vw5if">&nbsp;<span class="bwq0cbs">Cập nhật 1 ng&agrave;y trước</span></div>
</div>
</div>
</div>
<div class="a1b2hkis">
<div class="a13uoc2z">
<div class="col-xs-6 abzctes" data-testid="param-item">
<div class="a4ep88f">Diện t&iacute;ch</div>
<strong class="a3jfi3v">17 m&sup2;</strong></div>
</div>
</div>
<div class="a1b2hkis">
<div class="d-lg-block styles_adBodyCollapse__1Xvk7">
<div class="styles_adBodyTitle__JrqDu">M&ocirc; tả chi tiết</div>
<div>
<p class="styles_adBody__vGW74">+ Ph&ograve;ng ở tối đa 3 người 2 xe + Diện t&iacute;ch từ 12m2 - 17m2 Ph&ograve;ng gần trường T&agrave;i ch&iacute;nh Marketing, ph&acirc;n hiệu GTVT , ng&atilde; Tư Thủ Đức, Song H&agrave;nh, L&ecirc; Văn Việt . Hệ thống PCCC chuẩn chỉnh Cổng v&acirc;n tay, camera an ninh</p>
</div>
</div>
</div>', 11, '["https://res.cloudinary.com/dm73atrbj/image/upload/v1743622342/rnwvrxe7gwjlbzgy93cw.jpg","https://res.cloudinary.com/dm73atrbj/image/upload/v1743622344/fz3rsg2g4v4k0lswvo5y.jpg","https://res.cloudinary.com/dm73atrbj/image/upload/v1743622345/bsxw8rvj9li3nme5mlqx.jpg","https://res.cloudinary.com/dm73atrbj/image/upload/v1743622345/tphwgg8fv5hggy3it2dj.jpg","https://res.cloudinary.com/dm73atrbj/image/upload/v1743622346/gxpea40g3jpiwazk1top.jpg"]', 5, false, '2025-04-03 02:32:33.258+07', '2025-04-03 03:09:36.333+07');
INSERT INTO public."Posts" VALUES (25, 'STUDIO CỬA SỔ TRỜI CÓ SẴN MÁY LẠNH VÀ MÁY NƯỚC NÓNG LÝ THÁI TỔ QUẬN 10', 0, ' Đường Lý Thái Tổ, Phường 9, Quận 10, Tp Hồ Chí Minh', 2, '<div class="a1b2hkis">
<div class="cd9gm5n">
<h1>STUDIO CỬA SỔ TRỜI C&Oacute; SẴN M&Aacute;Y LẠNH V&Agrave; M&Aacute;Y NƯỚC N&Oacute;NG L&Yacute; TH&Aacute;I TỔ QUẬN 10</h1>
<div class="i1qen30x r9vw5if"><span class="bwq0cbs">Nội thất đầy đủ</span></div>
<div class="plmkxo3">
<div class="r9vw5if">
<div class="slhwvq6 r9vw5if"><strong class="pyhk1dv">3,2 triệu/th&aacute;ng</strong>&bull;<span class="brnpcl3"><strong>18 m&sup2;</strong></span></div>
</div>
</div>
<div class="r9vw5if">
<div class="sf0dbrp r9vw5if">&nbsp;<span class="bwq0cbs flex-1">Đường L&yacute; Th&aacute;i Tổ, Phường 9, Quận 10, Tp Hồ Ch&iacute; Minh</span></div>
<div class="r9vw5if">&nbsp;<span class="bwq0cbs">Cập nhật 27 ph&uacute;t trước</span></div>
</div>
</div>
</div>
<div class="a1b2hkis">
<div class="a13uoc2z">
<div class="col-xs-6 abzctes" data-testid="param-item">
<div class="a4ep88f">Diện t&iacute;ch</div>
<strong class="a3jfi3v">18 m&sup2;</strong></div>
<div class="col-xs-6 abzctes" data-testid="param-item">
<div class="a4ep88f">T&igrave;nh trạng nội thất</div>
<strong class="a3jfi3v">Nội thất đầy đủ</strong></div>
</div>
</div>
<div class="a1b2hkis">
<div class="d-lg-block styles_adBodyCollapse__1Xvk7">
<div class="styles_adBodyTitle__JrqDu">M&ocirc; tả chi tiết</div>
<div>
<p class="styles_adBody__vGW74">Điện 4k Nước 100k/ ph&ograve;ng Xe free Ph&iacute; dịch vụ 100k/ ph&ograve;ng Sẽ sơn mới lại ph&ograve;ng 100%</p>
</div>
</div>
</div>', 11, '["https://res.cloudinary.com/dm73atrbj/image/upload/v1743622551/qmaqvoktukaqh4xbbvx4.jpg","https://res.cloudinary.com/dm73atrbj/image/upload/v1743622552/dt9butatr5l97qpvai1y.jpg","https://res.cloudinary.com/dm73atrbj/image/upload/v1743622553/f0uadv5skfiyilgbla9y.jpg","https://res.cloudinary.com/dm73atrbj/image/upload/v1743622554/aiearmq4hosdsmemwwtg.jpg","https://res.cloudinary.com/dm73atrbj/image/upload/v1743622555/ueveqk2imwbqfymnh043.jpg"]', 8, false, '2025-04-03 02:35:58.762+07', '2025-04-05 13:47:41.746+07');
INSERT INTO public."Posts" VALUES (28, 'TRỐNG SẴN 1 PHÒNG NGỦ TÁCH BẾP FULL NỘI THẤT SÁT LÝ THƯỜNG KIỆT Q10', 0, ' Đường Lý Thường Kiệt, Phường 14, Quận 10, Tp Hồ Chí Minh', 3, '<div class="a1b2hkis">
<div class="cd9gm5n">
<h1>TRỐNG SẴN 1 PH&Ograve;NG NGỦ T&Aacute;CH BẾP FULL NỘI THẤT S&Aacute;T L&Yacute; THƯỜNG KIỆT Q10</h1>
<div class="i1qen30x r9vw5if"><span class="bwq0cbs">1 PN</span>&nbsp;&bull;&nbsp;<span class="bwq0cbs">Căn hộ dịch vụ, mini</span></div>
<div class="plmkxo3">
<div class="r9vw5if">
<div class="slhwvq6 r9vw5if"><strong class="pyhk1dv">5,3 triệu/th&aacute;ng</strong>&bull;<span class="brnpcl3"><strong>27 m&sup2;</strong></span></div>
</div>
</div>
<div class="r9vw5if">
<div class="sf0dbrp r9vw5if">&nbsp;<span class="bwq0cbs flex-1">Đường L&yacute; Thường Kiệt, Phường 14, Quận 10, Tp Hồ Ch&iacute; Minh</span></div>
<div class="r9vw5if">&nbsp;<span class="bwq0cbs">Cập nhật 24 ph&uacute;t trước</span></div>
</div>
</div>
</div>
<div class="a1b2hkis">
<div class="a13uoc2z">
<div class="col-xs-6 abzctes" data-testid="param-item">
<div class="a4ep88f">Loại h&igrave;nh căn hộ</div>
<strong class="a3jfi3v">Căn hộ dịch vụ, mini</strong></div>
<div class="col-xs-6 abzctes" data-testid="param-item">
<div class="a4ep88f">Diện t&iacute;ch</div>
<strong class="a3jfi3v">27 m&sup2;</strong></div>
<div class="col-xs-6 abzctes" data-testid="param-item">
<div class="a4ep88f">Giấy tờ ph&aacute;p l&yacute;</div>
<strong class="a3jfi3v">Hợp đồng đặt cọc</strong></div>
<div class="col-xs-6 abzctes" data-testid="param-item">
<div class="a4ep88f">Số ph&ograve;ng ngủ</div>
<strong class="a3jfi3v">1 ph&ograve;ng</strong></div>
<div class="col-xs-6 abzctes" data-testid="param-item">
<div class="a4ep88f">Số ph&ograve;ng vệ sinh</div>
<strong class="a3jfi3v">1 ph&ograve;ng</strong></div>
</div>
</div>
<div class="a1b2hkis">
<div class="d-lg-block styles_adBodyCollapse__1Xvk7">
<div class="styles_adBodyTitle__JrqDu">M&ocirc; tả chi tiết</div>
<div>
<p class="styles_adBody__vGW74">Điện : 4k/Kwh Nước : 100k/Người Ph&iacute; dịch vụ: free (bao gồm: wifi,r&aacute;c,vệ sinh h&agrave;ng lang,m&aacute;y giặt sấy chung,m&aacute;y lọc nước) Xe : free 2 chiếc</p>
</div>
</div>
</div>', 11, '["https://res.cloudinary.com/dm73atrbj/image/upload/v1743623485/yhnzwhxosvpm6afoux1m.jpg","https://res.cloudinary.com/dm73atrbj/image/upload/v1743623485/urrmvtvkrugmilutjd1q.jpg","https://res.cloudinary.com/dm73atrbj/image/upload/v1743623486/ln8sbuiqhq7r9kwcta2b.jpg","https://res.cloudinary.com/dm73atrbj/image/upload/v1743623487/wsfnz9q3keblgxb0qwgw.jpg","https://res.cloudinary.com/dm73atrbj/image/upload/v1743623489/cskemam7vtrwpuidt5af.jpg"]', 2, false, '2025-04-03 02:51:34.658+07', '2025-04-03 02:54:50.488+07');
INSERT INTO public."Posts" VALUES (29, 'TÌM NGƯỜI Ở GHÉP PHÒNG TRỌ TÂN PHÚ GÁC 1M8 NGAY TÂN HƯƠNG, LÊ THÚC HOẠCH', 0, 'Đường Lê Thúc Hoạch, Phường Tân Quý, Quận Tân Phú, Tp Hồ Chí Minh', 4, '<div class="a1b2hkis">
<div class="cd9gm5n">
<h1>PH&Ograve;NG TRỌ CHO THU&Ecirc; T&Acirc;N PH&Uacute; G&Aacute;C 1M8 NGAY T&Acirc;N HƯƠNG, L&Ecirc; TH&Uacute;C HOẠCH</h1>
<div class="plmkxo3">
<div class="r9vw5if">
<div class="slhwvq6 r9vw5if"><strong class="pyhk1dv">4,5 triệu/th&aacute;ng</strong>&bull;<span class="brnpcl3"><strong>30 m&sup2;</strong></span></div>
</div>
</div>
<div class="r9vw5if">
<div class="sf0dbrp r9vw5if">&nbsp;<span class="bwq0cbs flex-1">Đường L&ecirc; Th&uacute;c Hoạch, Phường T&acirc;n Qu&yacute;, Quận T&acirc;n Ph&uacute;, Tp Hồ Ch&iacute; Minh</span></div>
</div>
</div>
</div>
<div class="a1b2hkis">
<div class="a13uoc2z">
<div class="col-xs-6 abzctes" data-testid="param-item">
<div class="a4ep88f">Diện t&iacute;ch</div>
<strong class="a3jfi3v">30 m&sup2;</strong></div>
<div class="col-xs-6 abzctes" data-testid="param-item">
<div class="a4ep88f">Số tiền cọc</div>
<strong class="a3jfi3v">2.000.000 đ/th&aacute;ng</strong></div>
</div>
</div>
<div class="a1b2hkis">
<div class="d-lg-block styles_adBodyCollapse__1Xvk7">
<div class="styles_adBodyTitle__JrqDu">M&ocirc; tả chi tiết</div>
<div>
<p class="styles_adBody__vGW74">⛔Ch&iacute;nh chủ cho thu&ecirc; ph&ograve;ng trọ quận T&Acirc;N PH&Uacute; 🏡 Gần c&aacute;c trục đường lớn Nguyễn Sơn - L&ecirc; Th&uacute;c Hoạch - T&acirc;n Hương. C&aacute;ch Aeon T&acirc;n Ph&uacute; 2km. ⛔ CAM HẾT ẢNH CHỤP PH&Ograve;NG THỰC TẾ 1000% 💲Gi&aacute; thu&ecirc;: + 30m2 m&aacute;y lạnh: 4tr500/th&aacute;ng. + 30m2 full nội thất: 4tr800/th&aacute;ng 👉 Hỗ trợ lắp th&ecirc;m nội thất ri&ecirc;ng lẻ theo y&ecirc;u cầu với ph&iacute; cực rẻ. 👉 B&atilde;i xe rộng r&atilde;i.</p>
</div>
</div>
</div>', 11, '["https://res.cloudinary.com/dm73atrbj/image/upload/v1743624111/qzgpn4lygpmphg36dred.jpg","https://res.cloudinary.com/dm73atrbj/image/upload/v1743624112/kbw9eskioh7s2uzli06z.jpg","https://res.cloudinary.com/dm73atrbj/image/upload/v1743624112/xjgzyiwpl2bk1niv7wir.jpg","https://res.cloudinary.com/dm73atrbj/image/upload/v1743624114/hj4ua1fm7djcr7elndez.jpg","https://res.cloudinary.com/dm73atrbj/image/upload/v1743624118/tjvshrixhuqpkmsssyb5.jpg"]', 0, false, '2025-04-03 03:02:03.458+07', '2025-04-03 03:02:03.458+07');
INSERT INTO public."Posts" VALUES (30, 'TÌM NGƯỜI Ở GHÉP CĂN HỘ DUPLEX GÁC M8 - 50M2', 0, 'Đường Lê Thúc Hoạch, Phường Tân Quý, Quận Tân Phú, Tp Hồ Chí Minh', 4, '<div class="a1b2hkis">
<div class="cd9gm5n">
<h1>-🏡CĂN HỘ DUPLEX -📌G&Aacute;C M8 - 50M2 -💥L&Ecirc; TH&Uacute;C HOẠCH💥 T&Acirc;N HƯƠNG -💥VƯỜN L&Agrave;I</h1>
<div class="i1qen30x r9vw5if"><span class="bwq0cbs">1 PN</span>&nbsp;&bull;&nbsp;<span class="bwq0cbs">Duplex</span></div>
<div class="plmkxo3">
<div class="r9vw5if">
<div class="slhwvq6 r9vw5if"><strong class="pyhk1dv">4,8 triệu/th&aacute;ng</strong>&bull;<span class="brnpcl3"><strong>50 m&sup2;</strong></span></div>
</div>
</div>
<div class="r9vw5if">
<div class="sf0dbrp r9vw5if">&nbsp;<span class="bwq0cbs flex-1">Đường L&ecirc; Th&uacute;c Hoạch, Phường T&acirc;n Qu&yacute;, Quận T&acirc;n Ph&uacute;, Tp Hồ Ch&iacute; Minh</span></div>
<div class="r9vw5if">&nbsp;<span class="bwq0cbs">Cập nhật 8 ng&agrave;y trước</span></div>
</div>
</div>
</div>
<div class="a1b2hkis">
<div class="a13uoc2z">
<div class="col-xs-6 abzctes" data-testid="param-item">
<div class="a4ep88f">Loại h&igrave;nh căn hộ</div>
<strong class="a3jfi3v">Duplex</strong></div>
<div class="col-xs-6 abzctes" data-testid="param-item">
<div class="a4ep88f">Diện t&iacute;ch</div>
<strong class="a3jfi3v">50 m&sup2;</strong></div>
<div class="col-xs-6 abzctes" data-testid="param-item">
<div class="a4ep88f">Giấy tờ ph&aacute;p l&yacute;</div>
<strong class="a3jfi3v">Hợp đồng đặt cọc</strong></div>
<div class="col-xs-6 abzctes" data-testid="param-item">
<div class="a4ep88f">Số ph&ograve;ng ngủ</div>
<strong class="a3jfi3v">1 ph&ograve;ng</strong></div>
<div class="col-xs-6 abzctes" data-testid="param-item">
<div class="a4ep88f">Số ph&ograve;ng vệ sinh</div>
<strong class="a3jfi3v">1 ph&ograve;ng</strong></div>
<div class="col-xs-6 abzctes" data-testid="param-item">
<div class="a4ep88f">T&igrave;nh trạng nội thất</div>
<button type="button"></button></div>
</div>
</div>
<div class="a1b2hkis">
<div class="d-lg-block styles_adBodyCollapse__1Xvk7">
<div>
<p class="styles_adBody__vGW74">🏡PH&Ograve;NG TRỐNG DẠNG DUPLEX - G&aacute;c m8📌50M2 𝑳𝒆̂ 𝑻𝒉𝒖́𝒄 𝑯𝒐𝒂̣𝒄𝒉 - 𝑻𝒂̂𝒏 𝑯𝒖̛𝒐̛𝒏𝒈 - 𝑽𝒖̛𝒐̛̀𝒏 𝑳𝒂̀𝒊 🔰Bảo Vệ 24/7 - Camera an ninh - Thang m&aacute;y - To&agrave; Nh&agrave; Sạch Sẽ - An ninh - Giờ Giấc Tự Do - Vệ sinh H&agrave;nh lang ☎️CALL/ZALO/MES : --------- 〽️ĐẠI NGHĨA 〽️---------</p>
</div>
</div>
</div>', 11, '["https://res.cloudinary.com/dm73atrbj/image/upload/v1743624206/iyhv7ukqmjpguptitdp2.jpg","https://res.cloudinary.com/dm73atrbj/image/upload/v1743624207/opovphu6qxgvl7hoimzz.jpg","https://res.cloudinary.com/dm73atrbj/image/upload/v1743624208/qf9jygfpbciz8ktuwjkb.jpg","https://res.cloudinary.com/dm73atrbj/image/upload/v1743624209/undsvf4k7k7z8popk09i.jpg","https://res.cloudinary.com/dm73atrbj/image/upload/v1743624210/eavbnxxcexuzpe3e9znd.jpg"]', 0, false, '2025-04-03 03:03:36.815+07', '2025-04-03 03:03:36.815+07');
INSERT INTO public."Posts" VALUES (27, ' CĂN HỘ BAN CÔNG 30M2, DECOR XINH, NGAY NGÃ SÁU CỘNG HOÀ - QUẬN 1', 0, 'Đường Nguyễn Thị Minh Khai, Phường Nguyễn Cư Trinh, Quận 1, Tp Hồ Chí Minh', 3, '<div class="a1b2hkis">
<div class="cd9gm5n">
<h1>CĂN HỘ BAN C&Ocirc;NG 30M2, DECOR XINH, NGAY NG&Atilde; S&Aacute;U CỘNG HO&Agrave; - QUẬN 1</h1>
<div class="i1qen30x r9vw5if"><span class="bwq0cbs">1 PN</span>&nbsp;&bull;&nbsp;<span class="bwq0cbs">Căn hộ dịch vụ, mini</span></div>
<div class="plmkxo3">
<div class="r9vw5if">
<div class="slhwvq6 r9vw5if"><strong class="pyhk1dv">8 triệu/th&aacute;ng</strong>&bull;<span class="brnpcl3"><strong>30 m&sup2;</strong></span></div>
</div>
</div>
<div class="r9vw5if">
<div class="sf0dbrp r9vw5if">&nbsp;<span class="bwq0cbs flex-1">Đường Nguyễn Thị Minh Khai, Phường Nguyễn Cư Trinh, Quận 1, Tp Hồ Ch&iacute; Minh</span></div>
<div class="r9vw5if">&nbsp;<span class="bwq0cbs">Cập nhật 9 ph&uacute;t trước</span></div>
</div>
</div>
</div>
<div class="a1b2hkis">
<div class="a13uoc2z">
<div class="col-xs-6 abzctes" data-testid="param-item">
<div class="a4ep88f">Loại h&igrave;nh căn hộ</div>
<strong class="a3jfi3v">Căn hộ dịch vụ, mini</strong></div>
<div class="col-xs-6 abzctes" data-testid="param-item">
<div class="a4ep88f">Diện t&iacute;ch</div>
<strong class="a3jfi3v">30 m&sup2;</strong></div>
<div class="col-xs-6 abzctes" data-testid="param-item">
<div class="a4ep88f">Giấy tờ ph&aacute;p l&yacute;</div>
<strong class="a3jfi3v">Hợp đồng đặt cọc</strong></div>
<div class="col-xs-6 abzctes" data-testid="param-item">
<div class="a4ep88f">Số ph&ograve;ng ngủ</div>
<strong class="a3jfi3v">1 ph&ograve;ng</strong></div>
<div class="col-xs-6 abzctes" data-testid="param-item">
<div class="a4ep88f">Số ph&ograve;ng vệ sinh</div>
<strong class="a3jfi3v">1 ph&ograve;ng</strong></div>
</div>
</div>
<div class="a1b2hkis">
<div class="d-lg-block styles_adBodyCollapse__1Xvk7">
<div class="styles_adBodyTitle__JrqDu">M&ocirc; tả chi tiết</div>
<div>
<p class="styles_adBody__vGW74">CĂN HỘ BAN C&Ocirc;NG 30M2, DECOR XINH, NGAY NG&Atilde; S&Aacute;U CỘNG HO&Agrave; - QUẬN 1 ✅Tiện &iacute;ch căn hộ - Đầy đủ nội thất, m&aacute;y lạnh, smart TV, bếp từ, l&ograve; vi s&oacute;ng - Dọn ph&ograve;ng 2 lần/tuần - To&agrave; nh&agrave; thang m&aacute;y, phơi đồ s&acirc;n thượng</p>
</div>
</div>
</div>', 11, '["https://res.cloudinary.com/dm73atrbj/image/upload/v1743623356/mnhwxwnox4izmhvy9lxm.jpg","https://res.cloudinary.com/dm73atrbj/image/upload/v1743623356/zvuhtol6cpmc7uhftbgf.jpg","https://res.cloudinary.com/dm73atrbj/image/upload/v1743623357/tktnbxowgkizl6pk7bfj.jpg","https://res.cloudinary.com/dm73atrbj/image/upload/v1743623358/g2ipzgsb2xlotltkjdvp.jpg","https://res.cloudinary.com/dm73atrbj/image/upload/v1743623360/dqmz2jma61jlbrwfrmem.jpg"]', 1, false, '2025-04-03 02:49:31.731+07', '2025-04-03 03:09:43.405+07');
INSERT INTO public."Posts" VALUES (21, 'Phòng trọ giá siêu rẻ_kế ĐH CÔNG THƯƠNG_Có Nội Thất Cơ Bản_30m2_Thoáng', 5, 'Đường Lê Trọng Tấn, Phường Tây Thạnh, Quận Tân Phú, Tp Hồ Chí Minh', 2, '<div class="a1b2hkis">
<div class="cd9gm5n">
<h1>Ph&ograve;ng trọ gi&aacute; si&ecirc;u rẻ_kế ĐH C&Ocirc;NG THƯƠNG_C&oacute; Nội Thất Cơ Bản_30m2_Tho&aacute;ng</h1>
<div class="i1qen30x r9vw5if"><span class="bwq0cbs">Nội thất cao cấp</span></div>
<div class="plmkxo3">
<div class="r9vw5if">
<div class="slhwvq6 r9vw5if"><strong class="pyhk1dv">2,9 triệu/th&aacute;ng</strong>&bull;<span class="brnpcl3"><strong>30 m&sup2;</strong></span></div>
</div>
</div>
<div class="r9vw5if">
<div class="sf0dbrp r9vw5if">&nbsp;<span class="bwq0cbs flex-1">Đường L&ecirc; Trọng Tấn, Phường T&acirc;y Thạnh, Quận T&acirc;n Ph&uacute;, Tp Hồ Ch&iacute; Minh</span></div>
<div class="r9vw5if">&nbsp;<span class="bwq0cbs">Cập nhật&nbsp;2 ng&agrave;y trước</span></div>
</div>
</div>
</div>
<div class="a1b2hkis">
<div class="a13uoc2z">
<div class="col-xs-6 abzctes" data-testid="param-item"><br>
<div class="a4ep88f">Diện t&iacute;ch</div>
<strong class="a3jfi3v">30 m&sup2;</strong></div>
<div class="col-xs-6 abzctes" data-testid="param-item"><br>
<div class="a4ep88f">T&igrave;nh trạng nội thất</div>
<strong class="a3jfi3v">Nội thất cao cấp</strong></div>
<div class="col-xs-6 abzctes" data-testid="param-item"><br>
<div class="a4ep88f">Số tiền cọc</div>
<strong class="a3jfi3v">2.900.000 đ/th&aacute;ng</strong></div>
</div>
</div>
<div class="a1b2hkis">
<div class="d-lg-block styles_adBodyCollapse__1Xvk7">
<div class="styles_adBodyTitle__JrqDu">M&ocirc; tả chi tiết</div>
<div>
<div class="false col-xs-12 no-padding">
<div class="InlineShowPhoneButton_wrapper__0HZm7">ph&ograve;ng trọ gi&aacute; si&ecirc;u rẻ tho&aacute;ng m&aacute;t vị tr&iacute; trung t&acirc;m quận T&Acirc;N PH&Uacute; an ninh cao, kh&ocirc;ng chung chủ giờ giấc tự do ph&ograve;ng c&oacute; cửa sổ , ban c&ocirc;ng tho&aacute;ng m&aacute;t kế b&ecirc;n ĐẠI HỌC C&Ocirc;NG THƯƠNG, T&Acirc;N PH&Uacute; qua AEON T&acirc;n Ph&uacute; 3-5 ph&uacute;t call ngay để xem ph&ograve;ng nh&eacute; ae</div>
</div>
</div>
</div>
</div>', 11, '["https://res.cloudinary.com/dm73atrbj/image/upload/v1743621777/zldcuqccwy8ekgx7xoid.jpg","https://res.cloudinary.com/dm73atrbj/image/upload/v1743621778/ntqtgm9erkyvwu7fhbzm.jpg","https://res.cloudinary.com/dm73atrbj/image/upload/v1743621779/yqmblnts1od5ewuso0ko.jpg","https://res.cloudinary.com/dm73atrbj/image/upload/v1743621780/uvsp8mxofcvyxhvteft0.jpg"]', 13, false, '2025-04-03 02:23:14.627+07', '2025-04-03 23:50:22.108+07');


--
-- TOC entry 4992 (class 0 OID 16486)
-- Dependencies: 257
-- Data for Name: Profiles; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Profiles" VALUES (1, 'Vinh', 'Hồ Thành', 'hovinh414@gmail.com', '2002-10-03 07:00:00+07', '066202014476', 'Đăk Lăk', 'Khác', NULL, 11, false, '2024-10-11 04:55:36.768+07', '2024-10-11 04:56:57.89+07');
INSERT INTO public."Profiles" VALUES (2, 'Vinh', 'Hồ Thành', 'hovinh414@gmail.com', '2002-10-03 07:00:00+07', '32523626262', 'Đăk Lăk', 'Khác', NULL, 13, false, '2024-10-11 05:02:27.15+07', '2024-10-11 05:08:25.908+07');
INSERT INTO public."Profiles" VALUES (3, 'Nguyễn Văn', 'A', 'nguyenvana@gmail.com', NULL, NULL, '123 Test Street', 'Nam', NULL, 12, false, '2025-04-03 02:12:20.692+07', '2025-04-03 02:12:20.721+07');
INSERT INTO public."Profiles" VALUES (4, 'B', 'Nguyễn Văn', 'hovinh414@gmail.com', '2002-10-02 07:00:00+07', '066202014411', 'EaO, Eakar, Đăk Lăk', 'Khác', NULL, 14, false, '2025-04-03 03:06:33.507+07', '2025-04-03 03:06:33.507+07');
INSERT INTO public."Profiles" VALUES (5, 'C', 'Nguyễn Văn', 'nguyenvanc@gmail.com', '2002-10-03 07:00:00+07', '066202014444', 'Đăk Lăk', 'Khác', NULL, 15, false, '2025-04-03 23:43:54.773+07', '2025-04-05 13:48:17.124+07');


--
-- TOC entry 4988 (class 0 OID 16461)
-- Dependencies: 253
-- Data for Name: Ratings; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Ratings" VALUES (1, 21, 'Tuyệt vời', 5, 14, false, '2025-04-03 03:10:07.436+07', '2025-04-03 03:10:07.436+07');


--
-- TOC entry 4980 (class 0 OID 16419)
-- Dependencies: 245
-- Data for Name: Role_Users; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Role_Users" VALUES (9, 9, 'ADMIN', false, '2024-09-24 00:21:32.204+07', '2024-09-24 00:21:32.204+07');
INSERT INTO public."Role_Users" VALUES (10, 10, 'MANAGER', false, '2024-09-24 00:21:32.204+07', '2024-09-24 00:21:32.204+07');
INSERT INTO public."Role_Users" VALUES (11, 10, 'USER', false, '2024-09-24 00:21:32.204+07', '2024-09-24 00:21:32.204+07');
INSERT INTO public."Role_Users" VALUES (12, 9, 'USER', false, '2024-09-24 00:21:32.204+07', '2024-09-24 00:21:32.204+07');
INSERT INTO public."Role_Users" VALUES (13, 11, 'ADMIN', false, '2024-09-24 00:26:06.223+07', '2024-09-24 00:26:06.223+07');
INSERT INTO public."Role_Users" VALUES (15, 13, 'USER', false, '2024-10-11 05:01:14.166+07', '2024-10-11 05:01:14.166+07');
INSERT INTO public."Role_Users" VALUES (16, 12, 'MANAGER', false, '2025-04-03 02:12:20.729+07', '2025-04-03 02:12:20.729+07');
INSERT INTO public."Role_Users" VALUES (17, 14, 'USER', false, '2025-04-03 03:05:41.846+07', '2025-04-03 03:05:41.846+07');
INSERT INTO public."Role_Users" VALUES (18, 15, 'USER', false, '2025-04-03 23:43:11.636+07', '2025-04-03 23:43:11.636+07');
INSERT INTO public."Role_Users" VALUES (19, 16, 'USER', false, '2025-04-05 13:49:45.494+07', '2025-04-05 13:49:45.494+07');


--
-- TOC entry 4978 (class 0 OID 16405)
-- Dependencies: 243
-- Data for Name: Roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Roles" VALUES (1, 'ADMIN', 'Quản trị viên', false, '2024-09-24 00:21:31.55+07', '2024-09-24 00:21:31.55+07');
INSERT INTO public."Roles" VALUES (2, 'MANAGER', 'Chủ trọ', false, '2024-09-24 00:21:31.55+07', '2024-09-24 00:21:31.55+07');
INSERT INTO public."Roles" VALUES (3, 'USER', 'Thành viên', false, '2024-09-24 00:21:31.55+07', '2024-09-24 00:21:31.55+07');


--
-- TOC entry 5002 (class 0 OID 16554)
-- Dependencies: 267
-- Data for Name: Room_Convenients; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 4994 (class 0 OID 16504)
-- Dependencies: 259
-- Data for Name: Rooms; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Rooms" VALUES (42, 21, 'Phòng 102', 3000000, 31, 3, 'Còn trống', '35000', '20000', '100000', '50000', false, '2025-04-03 02:25:02.983+07', '2025-04-03 02:25:02.983+07');
INSERT INTO public."Rooms" VALUES (44, 22, 'Phòng 15', 3500000, 25, 4, 'Còn trống', '4000', '20000', '50000', '0', false, '2025-04-03 02:37:48.534+07', '2025-04-03 02:37:48.534+07');
INSERT INTO public."Rooms" VALUES (45, 23, 'Phòng 3.2', 2500000, 20, 3, 'Còn trống', '3000', '15000', '0', '120000', false, '2025-04-03 02:38:19.731+07', '2025-04-03 02:38:19.731+07');
INSERT INTO public."Rooms" VALUES (46, 23, 'Phòng 3.3', 3000000, 30, 4, 'Còn trống', '3000', '15000', '100000', '0', false, '2025-04-03 02:39:15.581+07', '2025-04-03 02:39:15.581+07');
INSERT INTO public."Rooms" VALUES (48, 25, 'Phòng 2', 5500000, 40, 5, 'Còn trống', '4000', '20000', '100000', '50000', false, '2025-04-03 02:53:20.576+07', '2025-04-03 02:53:20.576+07');
INSERT INTO public."Rooms" VALUES (49, 24, 'Phòng 404', 4800000, 30, 4, 'Còn trống', '4000', '20000', '50000', '50000', false, '2025-04-03 02:53:51.65+07', '2025-04-03 02:53:51.65+07');
INSERT INTO public."Rooms" VALUES (50, 26, 'Phòng 303', 5500000, 30, 4, 'Còn trống', '4500', '20000', '0', '0', false, '2025-04-03 02:55:50.142+07', '2025-04-03 02:55:50.142+07');
INSERT INTO public."Rooms" VALUES (51, 27, 'Phòng 20', 5500000, 35, 4, 'Còn trống', '4500', '20000', '60000', '90000', false, '2025-04-03 02:56:49.568+07', '2025-04-03 02:56:49.568+07');
INSERT INTO public."Rooms" VALUES (52, 27, 'Phòng 15', 7500000, 45, 5, 'Còn trống', '4500', '20000', '60000', '90000', false, '2025-04-03 02:57:20.784+07', '2025-04-03 02:57:20.784+07');
INSERT INTO public."Rooms" VALUES (53, 28, 'Phòng 302', 6000000, 25, 3, 'Còn trống', '4000', '20000', '50000', '50000', false, '2025-04-03 02:58:05.693+07', '2025-04-03 02:58:05.693+07');
INSERT INTO public."Rooms" VALUES (54, 29, 'Phòng 404', 4500000, 25, 4, 'Còn trống', '4000', '15000', '50000', '50000', false, '2025-04-03 03:04:04.523+07', '2025-04-03 03:04:04.523+07');
INSERT INTO public."Rooms" VALUES (55, 30, 'Phòng 10', 5000000, 30, 4, 'Còn trống', '4000', '15000', '50000', '50000', false, '2025-04-03 03:04:27.097+07', '2025-04-03 03:04:27.097+07');
INSERT INTO public."Rooms" VALUES (41, 21, 'Phòng 101', 3200000, 30, 3, 'Đã thuê', '3500', '20000', '50000', '100000', false, '2025-04-03 02:24:33.847+07', '2025-04-03 03:07:41.632+07');
INSERT INTO public."Rooms" VALUES (56, 25, 'Phòng 3', 4500000, 20, 4, 'Đã thuê', '4500', '20000', '0', '0', false, '2025-04-03 23:41:33.369+07', '2025-04-03 23:45:05.173+07');
INSERT INTO public."Rooms" VALUES (43, 22, 'Phòng 10', 4500000, 25, 4, 'Đang xử lý', '4000', '20000', '0', '0', false, '2025-04-03 02:36:45.413+07', '2025-04-05 13:40:20.628+07');
INSERT INTO public."Rooms" VALUES (47, 25, 'Phòng 1', 5000000, 35, 4, 'Đang xử lý', '4000', '20000', '100000', '50000', false, '2025-04-03 02:52:52.885+07', '2025-04-05 13:48:17.079+07');


--
-- TOC entry 4974 (class 0 OID 16389)
-- Dependencies: 239
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."SequelizeMeta" VALUES ('20231221151942-create-user.js');
INSERT INTO public."SequelizeMeta" VALUES ('20231221152644-create-role.js');
INSERT INTO public."SequelizeMeta" VALUES ('20231221152931-create-role-user.js');
INSERT INTO public."SequelizeMeta" VALUES ('20231221153648-create-catalog.js');
INSERT INTO public."SequelizeMeta" VALUES ('20231221160237-create-post.js');
INSERT INTO public."SequelizeMeta" VALUES ('20231221161000-create-comment.js');
INSERT INTO public."SequelizeMeta" VALUES ('20231221161238-create-rating.js');
INSERT INTO public."SequelizeMeta" VALUES ('20231221161626-create-wishlist.js');
INSERT INTO public."SequelizeMeta" VALUES ('20231226130637-create-profile.js');
INSERT INTO public."SequelizeMeta" VALUES ('20231226130723-create-room.js');
INSERT INTO public."SequelizeMeta" VALUES ('20231226130738-create-contract.js');
INSERT INTO public."SequelizeMeta" VALUES ('20231226130801-create-convenient.js');
INSERT INTO public."SequelizeMeta" VALUES ('20231226130937-create-index-counter.js');
INSERT INTO public."SequelizeMeta" VALUES ('20231226131035-create-room-convenient.js');
INSERT INTO public."SequelizeMeta" VALUES ('20240109063931-create-payment.js');
INSERT INTO public."SequelizeMeta" VALUES ('20240407063933-add-col-index-counter.js');


--
-- TOC entry 4976 (class 0 OID 16395)
-- Dependencies: 241
-- Data for Name: Users; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Users" VALUES (11, 'Hovinh1003', '0967626481', '$2b$10$CXHfyhLZjrAT8GwA/bnus.uR1UmyP567hWiFZvLkMRCZXdCzNrUtO', NULL, NULL, false, '2024-09-24 00:26:06.211+07', '2024-09-24 00:26:06.211+07');
INSERT INTO public."Users" VALUES (13, 'Người thuê trọ', '0967626480', '$2b$10$1LeaqSG9HwC9FEQRx/98s.vx7U5UJzxty0ZKIQKyRQgfAiYZcqvSW', NULL, NULL, false, '2024-10-11 05:01:14.163+07', '2024-10-11 05:01:14.163+07');
INSERT INTO public."Users" VALUES (12, 'Chủ Trọ A', '0967626483', '$2b$10$BZMc5UdbGocGafbkXtx/TOSZDqbEQRobKRpqUqFJNgP/nKBbn4yom', NULL, NULL, false, '2024-10-11 04:49:19.236+07', '2025-04-03 02:12:20.721+07');
INSERT INTO public."Users" VALUES (14, 'Nguyễn Văn B', '0987654321', '$2b$10$V279MfmsRfTvdSHk3Z/ynur0KgGMRSu/AhAu4MVDLj3LP/i09botG', NULL, NULL, false, '2025-04-03 03:05:41.841+07', '2025-04-03 03:05:41.841+07');
INSERT INTO public."Users" VALUES (15, 'Nguyễn Văn C', '0987654329', '$2b$10$YZEPd6OItebGTLQwVvPcxeDK8jVYygBc/xIgNiSS9d6MMds0yDEoi', NULL, NULL, false, '2025-04-03 23:43:11.633+07', '2025-04-03 23:43:11.633+07');
INSERT INTO public."Users" VALUES (16, 'Nguyễn Văn V', '0987654312', '$2b$10$.8zoMtI8dRv2s3xqMy9DeO.YV6I2LwhdbFNtvQxBI3ijaZ1emdOO2', NULL, NULL, false, '2025-04-05 13:49:45.491+07', '2025-04-05 13:49:45.491+07');


--
-- TOC entry 4990 (class 0 OID 16471)
-- Dependencies: 255
-- Data for Name: Wishlists; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 5026 (class 0 OID 0)
-- Dependencies: 246
-- Name: Catalogs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Catalogs_id_seq"', 4, true);


--
-- TOC entry 5027 (class 0 OID 0)
-- Dependencies: 250
-- Name: Comments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Comments_id_seq"', 1, false);


--
-- TOC entry 5028 (class 0 OID 0)
-- Dependencies: 260
-- Name: Contracts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Contracts_id_seq"', 9, true);


--
-- TOC entry 5029 (class 0 OID 0)
-- Dependencies: 262
-- Name: Convenients_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Convenients_id_seq"', 4, true);


--
-- TOC entry 5030 (class 0 OID 0)
-- Dependencies: 264
-- Name: IndexCounters_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."IndexCounters_id_seq"', 6, true);


--
-- TOC entry 5031 (class 0 OID 0)
-- Dependencies: 268
-- Name: Payments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Payments_id_seq"', 57, true);


--
-- TOC entry 5032 (class 0 OID 0)
-- Dependencies: 248
-- Name: Posts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Posts_id_seq"', 30, true);


--
-- TOC entry 5033 (class 0 OID 0)
-- Dependencies: 256
-- Name: Profiles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Profiles_id_seq"', 5, true);


--
-- TOC entry 5034 (class 0 OID 0)
-- Dependencies: 252
-- Name: Ratings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Ratings_id_seq"', 1, true);


--
-- TOC entry 5035 (class 0 OID 0)
-- Dependencies: 244
-- Name: Role_Users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Role_Users_id_seq"', 19, true);


--
-- TOC entry 5036 (class 0 OID 0)
-- Dependencies: 242
-- Name: Roles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Roles_id_seq"', 3, true);


--
-- TOC entry 5037 (class 0 OID 0)
-- Dependencies: 266
-- Name: Room_Convenients_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Room_Convenients_id_seq"', 80, true);


--
-- TOC entry 5038 (class 0 OID 0)
-- Dependencies: 258
-- Name: Rooms_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Rooms_id_seq"', 56, true);


--
-- TOC entry 5039 (class 0 OID 0)
-- Dependencies: 240
-- Name: Users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Users_id_seq"', 16, true);


--
-- TOC entry 5040 (class 0 OID 0)
-- Dependencies: 254
-- Name: Wishlists_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Wishlists_id_seq"', 1, false);


--
-- TOC entry 4803 (class 2606 OID 16435)
-- Name: Catalogs Catalogs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Catalogs"
    ADD CONSTRAINT "Catalogs_pkey" PRIMARY KEY (id);


--
-- TOC entry 4805 (class 2606 OID 16437)
-- Name: Catalogs Catalogs_slug_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Catalogs"
    ADD CONSTRAINT "Catalogs_slug_key" UNIQUE (slug);


--
-- TOC entry 4809 (class 2606 OID 16459)
-- Name: Comments Comments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Comments"
    ADD CONSTRAINT "Comments_pkey" PRIMARY KEY (id);


--
-- TOC entry 4819 (class 2606 OID 16530)
-- Name: Contracts Contracts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Contracts"
    ADD CONSTRAINT "Contracts_pkey" PRIMARY KEY (id);


--
-- TOC entry 4821 (class 2606 OID 16540)
-- Name: Convenients Convenients_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Convenients"
    ADD CONSTRAINT "Convenients_pkey" PRIMARY KEY (id);


--
-- TOC entry 4823 (class 2606 OID 16552)
-- Name: IndexCounters IndexCounters_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."IndexCounters"
    ADD CONSTRAINT "IndexCounters_pkey" PRIMARY KEY (id);


--
-- TOC entry 4827 (class 2606 OID 16577)
-- Name: Payments Payments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Payments"
    ADD CONSTRAINT "Payments_pkey" PRIMARY KEY (id);


--
-- TOC entry 4807 (class 2606 OID 16449)
-- Name: Posts Posts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Posts"
    ADD CONSTRAINT "Posts_pkey" PRIMARY KEY (id);


--
-- TOC entry 4815 (class 2606 OID 16495)
-- Name: Profiles Profiles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Profiles"
    ADD CONSTRAINT "Profiles_pkey" PRIMARY KEY (id);


--
-- TOC entry 4811 (class 2606 OID 16469)
-- Name: Ratings Ratings_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Ratings"
    ADD CONSTRAINT "Ratings_pkey" PRIMARY KEY (id);


--
-- TOC entry 4801 (class 2606 OID 16425)
-- Name: Role_Users Role_Users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Role_Users"
    ADD CONSTRAINT "Role_Users_pkey" PRIMARY KEY (id);


--
-- TOC entry 4795 (class 2606 OID 16415)
-- Name: Roles Roles_code_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Roles"
    ADD CONSTRAINT "Roles_code_key" UNIQUE (code);


--
-- TOC entry 4797 (class 2606 OID 16413)
-- Name: Roles Roles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Roles"
    ADD CONSTRAINT "Roles_pkey" PRIMARY KEY (id);


--
-- TOC entry 4799 (class 2606 OID 16417)
-- Name: Roles Roles_value_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Roles"
    ADD CONSTRAINT "Roles_value_key" UNIQUE (value);


--
-- TOC entry 4825 (class 2606 OID 16560)
-- Name: Room_Convenients Room_Convenients_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Room_Convenients"
    ADD CONSTRAINT "Room_Convenients_pkey" PRIMARY KEY (id);


--
-- TOC entry 4817 (class 2606 OID 16517)
-- Name: Rooms Rooms_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Rooms"
    ADD CONSTRAINT "Rooms_pkey" PRIMARY KEY (id);


--
-- TOC entry 4791 (class 2606 OID 16393)
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- TOC entry 4793 (class 2606 OID 16403)
-- Name: Users Users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);


--
-- TOC entry 4813 (class 2606 OID 16477)
-- Name: Wishlists Wishlists_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Wishlists"
    ADD CONSTRAINT "Wishlists_pkey" PRIMARY KEY (id);


--
-- TOC entry 4828 (class 2606 OID 16518)
-- Name: Rooms Rooms_postId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Rooms"
    ADD CONSTRAINT "Rooms_postId_fkey" FOREIGN KEY ("postId") REFERENCES public."Posts"(id);


-- Completed on 2025-04-05 14:06:33

--
-- PostgreSQL database dump complete
--

