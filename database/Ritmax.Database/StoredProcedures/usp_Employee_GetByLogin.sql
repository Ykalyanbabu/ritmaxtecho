CREATE PROCEDURE [dbo].[usp_Employee_GetByLogin]
    @Login NVARCHAR (256)
AS
BEGIN
    SET NOCOUNT ON;

    SELECT TOP (1)
        [Id],
        [CompanyId],
        [EmployeeCode],
        [FirstName],
        [LastName],
        [Email],
        [Username],
        [PasswordHash],
        [Role],
        [IsActive],
        [IsPasswordUpdated]
    FROM [dbo].[Employee]
    WHERE [IsDeleted] = 0
      AND ([Username] = @Login OR [Email] = @Login);
END
