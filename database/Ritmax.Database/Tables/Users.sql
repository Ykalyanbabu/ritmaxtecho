CREATE TABLE [dbo].[Users]
(
    [Id]           INT            IDENTITY (1, 1) NOT NULL,
    [Email]        NVARCHAR (200) NOT NULL,
    [DisplayName]  NVARCHAR (200) NOT NULL,
    [PasswordHash] NVARCHAR (500) NOT NULL,
    [IsActive]     BIT            NOT NULL CONSTRAINT [DF_Users_IsActive] DEFAULT (1),
    [CreatedAt]    DATETIME2 (7)  NOT NULL CONSTRAINT [DF_Users_CreatedAt] DEFAULT (SYSUTCDATETIME()),
    [UpdatedAt]    DATETIME2 (7)  NULL,
    [IsDeleted]    BIT            NOT NULL CONSTRAINT [DF_Users_IsDeleted] DEFAULT (0),
    CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [UQ_Users_Email] UNIQUE ([Email])
);
